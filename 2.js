const axios = require("axios");
const cheerio = require("cheerio");
const { URL } = require("url");

const MAX_DEPTH = 3;
const MAX_REQUESTS_PER_LEVEL = 10;
const visited = new Set();

async function fetchParse(url) {
    try {
        let response = await axios.get(url);
        let data = response.data;
        let $ = cheerio.load(data);
        let links = [];

        $("a").each((_, element) => {
            let href = $(element).attr("href");
            if (href) {
                let absoluteURL = new URL(href, url).toString();
                links.push(absoluteURL);
            }
        });

        return links;
    } catch (error) {
        console.error(`Ошибка при запросе ${url}: ${error.message}`);
        return [];
    }
}

async function crawl(url, depth = 0) {
    if (depth > MAX_DEPTH || visited.has(url)) {
        return;
    }

    console.log(`Сканирование: ${url} (глубина: ${depth})`);
    visited.add(url);

    let links = await fetchParse(url);
    let uniqueSet = new Set(links);
    let uniqueArray = Array.from(uniqueSet);
    let uniqueLinks = uniqueArray.slice(0, MAX_REQUESTS_PER_LEVEL);

    let requests = uniqueLinks.map(link => crawl(link, depth + 1));
    await Promise.all(requests);
}

async function startCrawler(startURL) {
    await crawl(startURL);
}

const startURL = "https://developer.spotify.com/documentation/web-api";
startCrawler(startURL);
