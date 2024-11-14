async function* fetchPages(url, maxPages) {
    for (let i = 1; i <= maxPages; i++) {
        let localUrl = url + `?page=${i}`;
        let response = await fetch(localUrl);

        if (!response.ok) {
            yield "Ошибка загрузки данных";
        } else {
            yield response;
        }
    }
}

(async () => {
    const datas = fetchPages("https://github.com/agent-yandex", 12);
    for await (const data of datas) {
        console.log(data)
    }
})()
