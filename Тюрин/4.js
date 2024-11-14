async function fetchAndTransform(urls) {
    try {
        const responses = await Promise.all(
            urls.map(
                url => fetch(url).then(
                    async (response) => {
                        if (!response.ok) {
                            throw new Error(`Ошибка загрузки`)
                        }
                        return await response.json()
                    }
                )
            )
        )
        return responses.map(
            data => (
                {
                    id: data.id,
                    title: data.title,
                }
            )
        )
    }
    catch (error) {
        return `Ошибка загрузки: ${error}`
    }
}

(async () => {
    let urls = [`https://pokeapi.co/api/v2/pokemon/ditto`, `https://jsonplaceholder.typicode.com/todos/1`]
    console.log(await fetchAndTransform(urls))
})()