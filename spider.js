const axios = require("axios");
const cheerio = require("cheerio");
const { URL } = require("url");

const MAX_DEPTH = 3;
const MAX_REQUESTS_PER_LEVEL = 10;
const visited = new Set();

async function getSpotifyToken() {
    const clientID = '9f2822a4fe3c4eb982da5f1bcb021d38';
    const clientSecret = '6e51c26be9a447258c4f41c265f3de0d';
    
    const response = await axios.post('https://accounts.spotify.com/api/token', null, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(clientID + ':' + clientSecret).toString('base64')
        },
        params: {
            grant_type: 'client_credentials'
        }
    });
    return response.data.access_token;
}

async function fetchTracks(artist, token) {
    const response = await axios.get(`https://api.spotify.com/v1/search`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        params: {
            q: artist,
            type: 'track',
            limit: 10
        }
    });
    return response.data.tracks.items.map(track => track.external_urls.spotify);
}

//fetch url on all pages
async function fetchAndParse(url) {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const links = [];

        $("a").each((_, element) => {
            const href = $(element).attr("href");
            if (href) {
                const absoluteURL = new URL(href, url).toString();
                links.push(absoluteURL);
            }
        });

        return links;
    } catch (error) {
        console.error(`Ошибка при загрузке URL: ${url} - ${error.message}`);
        return [];
    }
}

// async depth
async function crawl(url, depth = 1) {
    if (depth > MAX_DEPTH || visited.has(url)) return;
    visited.add(url);

    console.log(`Обход URL: ${url} (глубина: ${depth})`);

    const links = await fetchAndParse(url);
    const uniqueLinks = Array.from(new Set(links)).slice(0, MAX_REQUESTS_PER_LEVEL);

    await Promise.all(uniqueLinks.map((link) => crawl(link, depth + 1)));
}

// main
(async () => {
    const token = await getSpotifyToken();
    const artist = "Imagine Dragons";
    const trackLinks = await fetchTracks(artist, token);

    console.log("Найденные треки:", trackLinks);

    for (const trackURL of trackLinks) {
        await crawl(trackURL);
    }

    console.log("Обход завершен.");
})();
