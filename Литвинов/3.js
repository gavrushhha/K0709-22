import fetch from "node-fetch"

// node --version -> v12.22.9

// async function fetchWithTimeout(url, timeout){
//     return await Promise.race([fetch(url)], { signal: AbortSignal.timeout(timeout) }).then(
//         (resolve)=>{
//             console.log(resolve)
//         },
//         (reject)=>{
//             console.log("Timeout")
//         }
//     )
// }

// fetchWithTimeout("https://google.com", 1000)



// node --version -> js online compiler
// async function fetchWithTimeout(url, timeout){
//     try {
//         return await Promise.race([fetch(
//             url, {signal: AbortSignal.timeout(timeout)}
//         )])
//     } catch (err) {
//         throw new Error(`Ошибка таймаута`)
//     }
// };

// const url = "https://google.com"
// const timeout = 400
// fetchWithTimeout(url, timeout).then(
//     data => console.log(data)
// ).catch(
//     error => console.error(error)
// );