import fetch from "node-fetch"


async function* paginatedFetch(url, maxPages) {
    for(let i = 1; i <= maxPages; i++) {
        try{
            let response = await fetch(`${url}/${i}`)
            let data = await response.json()
            if (!data || data.length === 0){
                break
            }
            yield data
        }
        catch {
            break
        }
    }
}

for(let page in paginatedFetch(
    "https://jsonplaceholder.typicode.com/posts",
    2
)){
    console.log(page)
}
