// const CLIENT_ID = ``;
// const CLIENT_SECRET = ``;

const axios = require(`axios`);

const MAX_DEPTH = 3;
const MAX_REQUESTS_PER_LEVEL = 10;
const visited = new Set();

const SPOTIFY_BASE_URL = `https://api.spotify.com/v1`;
const CLIENT_ID = ``;
const CLIENT_SECRET = ``;

async function getAccessToken() {
    const tokenUrl = `https://accounts.spotify.com/api/token`;
    const headers = {
        "Content-Type": `application/x-www-form-urlencoded`,
        Authorization: `Basic ` + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(`base64`),
    };
    const data = new URLSearchParams({ grant_type: `client_credentials` });

    try {
        const response = await axios.post(tokenUrl, data, { headers });
        return response.data.access_token;
    } catch (error) {
        console.error(`Error fetching access token:`, error);
        return null;
    }
}

async function fetchData(url, accessToken) {
    try {
        const response = await axios.get(url, {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error.message);
        return null;
    }
}

async function crawl(url, accessToken, depth = 0) {
    if (depth > MAX_DEPTH || visited.has(url)) return;
    console.log(`Crawling URL: ${url} at depth ${depth}`);
    visited.add(url);

    const data = await fetchData(url, accessToken);
    if (!data) return;

    let links = [];
    if (url.includes(`/artists`) && data.id) {
        links.push(`${SPOTIFY_BASE_URL}/artists/${data.id}/albums`);
        links.push(`${SPOTIFY_BASE_URL}/artists/${data.id}/top-tracks?market=US`);
    } else if (url.includes(`/albums`) && data.items) {
        data.items.slice(0, MAX_REQUESTS_PER_LEVEL).forEach(album => {
            if (album.id) {
                links.push(`${SPOTIFY_BASE_URL}/albums/${album.id}`);
            }
        });
    } else if (url.includes(`/top-tracks`) && data.tracks) {
        data.tracks.forEach(track => {
            if (track.id) {
                links.push(`${SPOTIFY_BASE_URL}/tracks/${track.id}`);
            }
        });
    } else if (url.includes(`/tracks`)) {
        if (data.name && data.artists && data.artists[0]) {
            console.log(`______________________________________________________`)
            console.log(`Track found: ${data.name} by ${data.artists[0].name}`);
            console.log(`______________________________________________________`)
        } else {
            console.log(`Track data is incomplete.`);
        }
    }

    const uniqueLinks = Array.from(new Set(links)).slice(0, MAX_REQUESTS_PER_LEVEL);

    for (const link of uniqueLinks) {
        await crawl(link, accessToken, depth + 1);
    }
}

async function startCrawling(artistId) {
    const accessToken = await getAccessToken();
    if (!accessToken) {
        console.error(`Failed to obtain access token. Exiting.`);
        return;
    }

    const artistUrl = `${SPOTIFY_BASE_URL}/artists/${artistId}`;
    await crawl(artistUrl, accessToken);
}

const LINKIN_PARK_ID = `6XyY86QOPPrYVGvF9ch6wz`;
const NICKELBACK_ID = `6deZN1bslXzeGvOLaLMOIF`;
const EMINEM_ID = `7dGJo4pcD2V6oG8kP0tJRR`;

startCrawling(LINKIN_PARK_ID);
startCrawling(NICKELBACK_ID);
startCrawling(EMINEM_ID);
