async function fetchDataWithTimeoutAndRetry(url, max_tries, timeout) {
    const fetchWithTimeout = (url, timeout) => {
        return Promise.race([
            fetch(url),
            new Promise(reject => setTimeout(() => reject(new Error('timed out')), timeout))
        ])
    }

    let attempts = 0
    while(attempts < max_tries) {
        try {
            const response = await fetchWithTimeout(url, timeout)
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            return await response.json()
        }
        catch (error) {
            attempts++
            if (attempts >= max_tries) {
                throw new Error(`Failed to fetch after ${max_tries} attempts: ${error.message}`)
            }
            console.log(`Attempt ${attempts} failed: ${error.message}, retrying...`)
        }
    }
}


(async () => {
    console.log(await fetchDataWithTimeoutAndRetry(`https://pokeapi.co/api/v2/pokemon/ditto`, 10, 10000))
})()