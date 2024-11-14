async function loadData(url) {
    return new Promise(async (resolve, reject) => {
        try {
            const request = new Request(url);
            resolve(await fetch(request));
        } catch (e) {
            reject("Ошибка загрузки данных")
        }
    });
}

async function loadAllData(urls) {
    var promises = []
    for (let url of urls) {
        promises.push(loadData(url));
    }
    try {
        await Promise.all(promises);
        console.log("Данные успешно загружеsны!")
    }
    catch (e) {
        return "Ошибка загрузки данных";
    }
}

console.log(await loadAllData(['https://cataas.com/cat?json=true', 'localhost']));
