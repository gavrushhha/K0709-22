async function fetchWithLimit(url, max_queries) {
    let queries_count = 0;
    while (queries_count < max_queries) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Ошибка сети');
            return await response.json();
        } catch (error) {
            queries_count++;
            if (queries_count >= max_queries) {
                throw new Error('Запрос не удался');
            }
        }
    }
}
fetchWithLimit('https://api.coindesk.com/v1/bpi/currentprice.json', 3)
    .then(data => {
        console.log('Данные получены:', data);
    })
    .catch(error => {
        console.error(error.message);
    });
