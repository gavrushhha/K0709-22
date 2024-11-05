const axios = require("axios");
const cheerio = require("cheerio");
const { URL } = require("url");

const MAX_DEPTH = 3;
const MAX_REQUESTS_PER_LEVEL = 10;
const visited = new Set();

async function fetchAndParse(url) {
    try {
        const response = await axios.get(url, { maxRedirects: 5 });
        const $ = cheerio.load(response.data);
        const links = [];
        $("a").each((_, element) => {
            const href = $(element).attr("href");
            if (href) {
                const absoluteURL = new URL(href, url).toString();
                if (!visited.has(absoluteURL) && absoluteURL.includes("last.fm")) {
                    links.push(absoluteURL);
                }
            }
        });
        return links;
    } catch (error) {
        console.error(`Ошибка при запросе ${url}: ${error.message}`);
        if (error.code === 'ECONNRESET') {
            console.log(`Повторная попытка для ${url}`);
            await new Promise(res => setTimeout(res, 1000));
            return fetchAndParse(url);
        }
        return [];
    }
}

async function crawl(url, depth) {
    if (depth > MAX_DEPTH || visited.has(url)) return;
    visited.add(url);
    console.log(`Глубина ${depth}: посещение ${url}`);
    const links = await fetchAndParse(url);
    const uniqueLinks = Array.from(new Set(links)).slice(0, MAX_REQUESTS_PER_LEVEL);
    await Promise.all(uniqueLinks.map(link => crawl(link, depth + 1)));
}

async function startCrawler(initialUrl) {
    await crawl(initialUrl, 1);
}

const initialUrl = 'https://www.last.fm/music/';
startCrawler(initialUrl);
