
// 4. Напишите функцию fetchAndTransform, которая принимает массив URL и загружает
// данные по каждому URL параллельно. Данные должны быть преобразованы в массив
// объектов, содержащих поля id и title. Если один из запросов завершился ошибкой,
// функция должна возвращать "Ошибка загрузки".
async function fetchAndTransform(urls) {
    try {
        let [promises, results] = [[], []];

        for (const url of urls) {
            promises.push(fetch(url));
        }

        await Promise.all(promises).then((responses) => {
            responses.forEach((resp, index) => {
                if (!resp.ok) {
                    throw new Error('Ошибка загрузки', resp)
                }
                
                results.push( { id: index + 1, title: resp.url } )
            })
        })

        return results
    } catch (error) {
        return 'Ошибка загрузки'
    }
}


(async () => {
    let urls = [
        'https://stepik.org',
        'https://google.com',
        'https://google.com'
    ]
    console.log(await fetchAndTransform(urls))
})()
