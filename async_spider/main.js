const puppeteer = require('puppeteer')
const cheerio = require('cheerio')


async function parse_album (url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url, { waitUntil: 'networkidle2' })

    const content = await page.content()
    const album_content = cheerio.load(content)

    const links = [];
    album_content('a').each((_, element) => {
        const href = album_content(element).attr('href')
        if (href && href.includes('/pages/')) {
            links.push(`https://zaycev.net${href}`)
        }
    })
    await browser.close()
    return Array.from(new Set(links))
}


async function get_text(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url, { waitUntil: 'networkidle2' })

    const content = await page.content()
    const track_content = cheerio.load(content)

    const text = track_content('pre[data-qa="TrackPage-lyricsText"]').text().trim();
    console.log(`Текст песни из ${url}:\n${text}\n`)

    await browser.close()
}

async function spider(url) {
    console.log(`Поиск на странице ${url}`)
    const links = await parse_album (url)
    console.log(`Найдено ${links.length} треков`)

    for (const link of links) {
        await get_text(link)
    }
}

spider('https://zaycev.net/search?query_search=ХАННА&type=all')
