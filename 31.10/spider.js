const axios = require("axios");
const cheerio = require("cheerio");
const { URL } = require("url");

const START_URL = "https://developer.spotify.com/documentation/web-api";  // Начальная ссылка для обхода
const MAX_DEPTH = 3;                      // Максимальная глубина обхода
const MAX_REQUESTS_PER_LEVEL = 10;        // Максимум запросов на каждом уровне
const visited = new Set();                // Множество для хранения уникальных посещенных ссылок

async function fetchAndParse(url) {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const links = [];

        // Извлечение всех ссылок на странице
        $("a").each((_, element) => {
            const href = $(element).attr("href");
            if (href) {
                const absoluteURL = new URL(href, url).toString();
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
    if (depth > MAX_DEPTH || visited.has(url)) return;
    visited.add(url);

    console.log(`Обход ${url} на уровне ${depth}`);

    const links = await fetchAndParse(url);
    const uniqueLinks = Array.from(new Set(links)).slice(0, MAX_REQUESTS_PER_LEVEL);

    const crawlPromises = uniqueLinks.map(link => crawl(link, depth + 1));
    await Promise.all(crawlPromises);
}

crawl(START_URL)
    .then(() => {
        console.log("Обход завершен. Собраны уникальные ссылки:");
        console.log(Array.from(visited));
        console.log(`${Array.from(visited).length} Уникальных ссылок было собрано.`);

    })
    .catch(error => {
        console.error("Ошибка при обходе:", error);
    });
