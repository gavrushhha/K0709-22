async function loadData(url) {
    return new Promise(async (resolve, reject) => {
        const request = new Request(url);
        resolve(await fetch(request.text()).catch(() => reject("Ошибка загрузки данных")));
    });
}

function loadAllData(urls) {
    var promises = []
    for (let url of urls) {
        promises.push(loadData(url));
    }
    try {
        Promise.all(promises);
        console.log("Данные успешно загружены!")
    }
    catch (e) {
        return "Ошибка загрузки данных";
    }
}

loadAllData(['localhost'])

