// Реализуйте асинхронный генератор fetchPagesWithStopCondition,
// прекращающий выполнение, если данные не загружены или достигнут максимум.

async function* fetchPagesWithStopCondition(fetchFunction, maxPages) {
    let currentPage = 1;

    while (currentPage <= maxPages) {
        try {
            const data = await fetchFunction(currentPage);

            if (!data || data.length === 0) {
                console.log(`Данных нет, их украл бабайка`);
                return;
            }
            yield data;
            currentPage++;
        } catch (error) {
            console.log(`Уведомляем .... У вас ошибка`);
            return;
        }
    }
}

const fetchPageData = async (page, URL) => {
    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error()}
    return await response.json();
};


