async function* fetchPages(url, maxPages) {
    for (let i = 1; i <= maxPages; i += 1) {
        const request = new Request(url + "?page=" + i);
        yield (await fetch(request)).text();
    }
}


const genetator = fetchPages("https://www.google.com/search", 3)

for await (let page of genetator) {
    console.log(page)
}
