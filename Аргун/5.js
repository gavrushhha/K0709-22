async function* fetchPages(baseUrl, maxPages) {
    for (let page = 1; page <= maxPages; page++) {
        const url = `${baseUrl}?page=${page}`;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Ошибка сети');
            const data = await response.json();
            yield data;
        } catch (error) {
            break;
        }
    }
}


(async () => {
    const baseUrl = 'https://rickandmortyapi.com/api/character';
    const maxPages = 5;
    for await (const pageData of fetchPages(baseUrl, maxPages)) {
        console.log('Данные страницы:', pageData);
    }
})();
