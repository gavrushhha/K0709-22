import fetch from "node-fetch"


async function sequentialFetch(urls){
    let ans = []
    for(let i = 0; i < urls.length; i++){
        let url = urls[i]
        try{
            ans.push(await fetch(url))
        } catch{
            console.log("Ошибка в загрузке данных")
            break
        }
        setTimeout(() => { 
        }, 500);
    }
    return ans
}

sequentialFetch(["https://google.com"])