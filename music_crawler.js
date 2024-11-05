const axios = require('axios');
const cheerio = require('cheerio');

const MAX_DEPTH = 3;
const MAX_REQUESTS_PER_LEVEL = 10;

async function scanPage(url, depth = 0) {
  console.log(`Сканирование страницы: ${url} (Глубина: ${depth})`);

  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const links = $('a').map((_, element) => $(element).attr('href')).get();
    const uniqueLinks = new Set(links);

    console.log(`Найдено ссылок: ${uniqueLinks.size}`);
    for (const link of uniqueLinks) {
      console.log(link);
    }
    if (depth < MAX_DEPTH) {
      let requests = 0;
      for (const link of uniqueLinks) {
        if (requests < MAX_REQUESTS_PER_LEVEL) {
          await scanPage(link, depth + 1);
          requests++;
        } else {
          break;
        }
      }
    }
  } catch (error) {
    console.error(`Ошибка сканирования страницы: ${error}`);
  }
}

const startUrl = 'https://www.azlyrics.com/w/weeknd.html'; 
scanPage(startUrl);
