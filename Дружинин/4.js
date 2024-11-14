async function loadAllData(urls) {
    let responses = [];
    for (let url of urls) {
        let response = fetch(url);
        responses.push(response)
    }

    try {
        let urlData = await Promise.all(responses);
        for (let data of urlData) {
            if (!data.ok) {
                throw new Error(`Ошибка в ${data.url}`);
            }
        }
        console.log("Данные загружены успешно");
    } catch (error) {
        console.log("Ошибка загрузки данных");
    }
}

const goodUrls = ["https://github.com/agent-yandex", "https://github.com/agent-yandex", "https://github.com/agent-yandex"];
const badUrls = ["https://github.com/agent-yande", "https://github.com/agent-yandex", "https://github.com/agent-yandex"];

loadAllData(goodUrls);
loadAllData(badUrls);
