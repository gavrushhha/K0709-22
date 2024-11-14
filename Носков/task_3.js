async function fetchWithLimit(url, retries) {
    for (let i = 0; i < retries; i += 1) {
        try {
            const request = new Request(url);
            const response = await fetch(request);
            return response.text()
        } catch (e){
        }
    }
    return "Запрос не удался"
}


console.log(await fetchWithLimit('https://cataas.com/cat?json=true', 5))
console.log(await fetchWithLimit('localhost', 5))
