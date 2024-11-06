const axios = require("axios");
const cheerio = require("cheerio");
const { URL } = require("url");

const MAX_DEPTH = 3; 
const MAX_REQUESTS_PER_LEVEL = 10;
const visited = new Set();       

async function fetchAndParse(url) {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
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
        console.error(`Ошибка при получении данных с ${url}: ${error.message}`);
        return [];
    }
}

async function crawl(url, depth = 0) {
    if (depth > MAX_DEPTH || visited.has(url)) return;
    visited.add(url);

    console.log(`Сканируем: ${url} (глубина: ${depth})`);

    const links = await fetchAndParse(url);
    const uniqueLinks = Array.from(new Set(links)).slice(0, MAX_REQUESTS_PER_LEVEL);

    await Promise.all(uniqueLinks.map(async (link) => {
        if (!visited.has(link)) {
            await crawl(link, depth + 1);
        }
    }));
}

const startURL = "https://www.last.fm/api"; 
crawl(startURL).then(() => {
    console.log("Обход завершен");
    console.log("Всего уникальных ссылок:", visited.size);
});
