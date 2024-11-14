async function* paginatedFetchWithStop(url, max_pages) {
    let page = 1

    while (page <= max_pages) {
    try {
        const response = await fetch(`${url}?page${page}`)

        if (!response.ok) throw new Error('Response has not status ok')
        if (response.length === 0) break
        // console.log(response)
        yield response
    } catch(error){
        console.log(error)
        throw new Error('Bad requests. Check your url')
    }
    page++

    }
}  



(async () => {
    const url = 'https://example.com'
    // const bad_url = 'https://exampleqeqwe.com'

    const max_pages = 25
    for await (const pageData of paginatedFetchWithStop(url, max_pages)) {
      console.log(pageData.status)
    }
})()