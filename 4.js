async function fetchAndTransform(urls) {
    try {
        const fetchPromises = urls.map(url =>
            fetch(url)
                .then(response => {
                    if (!response.ok) throw new Error('Ошибка загрузки')
                    return response.json()
                })
        );
        const results = await Promise.all(fetchPromises)
        return results.map(({id, name}) => ({id, name}))
    } catch (error) {
        console.log(error)
    }
}

const urls = ['https://jsonplaceholder.typicode.com/users/2', 'https://jsonplaceholder.typicode.com/users/4']
fetchAndTransform(urls).then(data => console.log(data))
