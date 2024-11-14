import axios from 'axios'

async function loadSelectedData(urls) {
    let sucUrls = []
    for (const url of urls) {
        try {
            const data = (await axios(url)).data
            sucUrls.push(data)    
        } catch (e) {}
    }
    return sucUrls
}

console.log(await loadSelectedData([
    "http://localhost:8020",
    "http://localhost:8021",
    "https://cataas.com/cat?json=true",
]))
