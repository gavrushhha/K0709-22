const puppeteer = require('puppeteer')
const cheerio = require('cheerio')

async function parse_album (uri) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(uri, { waitUntil: 'networkidle2' })

    const content = await page.content()
    const album_content = cheerio.load(content)

    const album_еitle = album_content('.deco-typo').first().text().trim()
    console.log(`Название альбома: ${album_еitle}`)

    const links = []
    album_content('a').each((_, element) => {
        const href = album_content(element).attr('href')
        if (href && href.includes('/pages/')) {
            links.push(`https://zaycev.net${href}`)
        }
    })
    await browser.close()
    return Array.from(new Set(links))
}

async function get_text(trackUrl) {
    console.log(trackUrl)
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(trackUrl, { waitUntil: 'networkidle2' })

    const content = await page.content()
    const track_content = cheerio.load(content)

    const text = track_content('pre[data-qa="TrackPage-lyricsText"]').text().trim();
    console.log(`Текст песни из ${trackUrl}:\n${text}\n`)

    await browser.close()
}

async function spider(uri) {
    console.log(`Поиск треков на странице альбома ${uri}`)
    const trackLinks = await parse_album (uri)
    console.log(`Найдено ${trackLinks.length} треков на странице альбома ${uri}`)

    for (const link of trackLinks) {
        await get_text(link)
    }
}

spider('https://zaycev.net/search?query_search=агутин&type=all')
