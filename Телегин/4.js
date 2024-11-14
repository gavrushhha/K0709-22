async function loadSelectedData(urlarr){
    for await (let url of urlarr){
        response  = await fetch(url)
        if (response.status=== 200){
            ans = await response.json()
            console.log(ans);
        } else {
            console.log(`url: ${url} неправильный`)
        }
    }
}
const urls = ['https://jsonplaceholder.typicode.com/users/abasv', 'https://jsonplaceholder.typicode.com/users/jkbfkjs']

for (let i = 0; i<3; i++){
    urls.push(`https://jsonplaceholder.typicode.com/users/${i}`)
}


loadSelectedData(urls)