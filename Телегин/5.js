async function* fetchPagesWithStopCondition(urlarr, max){
    let count = 0;
    for (let url of urlarr){
        response  = await fetch(url)
        if (response.status !== 200 || count > max){
            break;
        }
        count++;
        ans = await response.json();
        yield ans;
    }
}
const urls = []

for (let i = 1; i<4; i++){
    urls.push(`https://jsonplaceholder.typicode.com/users/${i}`)
}
// urls[1] = 'https://jsonplaceholder.typicode.com/users/0'; # закончит на нем

(async () => {
    const dataset = fetchPagesWithStopCondition(urls, 4);
    for await (const data of dataset){
        console.log(data)
    }
})();