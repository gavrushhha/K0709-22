import axios from 'axios'

async function fetchRetryAndTimeout(url, timeoutMil, retries) {
    for (let i = 0; i < retries; i++) {
        try {
            return (await axios(url, {
                timeout: timeoutMil
            })).data
        } catch (e) {
            console.log("request failed, retrying")
        }
    }
}

console.log(await fetchRetryAndTimeout("https://youtube.com", 5000, 5))
console.log(await fetchRetryAndTimeout("https://cataas.com/cat?json=true", 5000, 5))
