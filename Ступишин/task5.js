//пробегаемся по страничкам в юрл, и те данные которые в них есть
async function* paginatedFetchWithStop(url, maxPages) {
    for (let page = 1; page <= maxPages; page++) {
        const currentUrl = `${url}${page}`;
        try {
            const response = await fetch(currentUrl);
            if (!response.ok) return;
            const data = await response.json();
            if (!data || Object.keys(data).length === 0) return;
            yield data;
        } catch (error) {
            return;
        }
    }
}

(async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    const maxPages = 10;
    for await (const data of paginatedFetchWithStop(url, maxPages)) {
        console.log('Данные:', data);
    }
    console.log('Загрузка завершена');
})();
