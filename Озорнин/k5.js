import axios from 'axios'

async function* fetchPagesWithStopCondition(urls) {
    for (const url of urls.slice(-1)) {
        try {
            yield (await axios(url)).data
        } catch (e) {
            return
        }
    }
}

for await (const data of fetchPagesWithStopCondition(["https://cataas.com/cat?json=true", "http://localhost", "https://cataas.com/cat?json=true"])) {
    console.log(data)
}
