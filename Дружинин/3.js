async function fetchWithLimit(url, maxCount) {
    let tryCount = 0;

    while (tryCount != maxCount) {
        let response = await fetch(url);
        if (response.status === 200) {
            console.log("Запрос удался");
            return;
        }
        tryCount++;
    }

    throw new Error("Запрос не удался");
}

fetchWithLimit("https://github.com/agent-yandex", 12);
fetchWithLimit("https://github.com/agent-yande", 12);
