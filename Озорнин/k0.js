import axios from 'axios'

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithRetry(url, retries, delay) {
    for (let i = 0; i < retries; i++) {
        try {
            return (await axios(url)).data
        } catch (e) {
            console.log("request failed, retrying")
            await sleep(delay)
        }
    }
}

console.log(await fetchWithRetry("http://localhost:8020", 4, 5000))
