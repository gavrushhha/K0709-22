async function* paginatedFetchWithStop(url, max_pages) {
    let page = 1
    while (page <= max_pages) {
        try {
            const response = await fetch(`${url}?page=${page}`)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            const data = await response.json()
            yield data.results
            page++
        }
        catch (error) {
            console.error(`Error fetching page ${page}:`, error)
            break
        }
    }
}