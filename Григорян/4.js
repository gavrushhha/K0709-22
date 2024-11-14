// Реализуйте функцию loadSelectedData, принимающую массив URL и загружающую
// данные только для успешных URL.

async function loadSelectedData(listURL) {
    let res = []
    for (let URL of listURL) {
        let response = await fetch(URL)
        if (response.ok) {
            let data = await response.json()
            res.push(data)
        }
    }
    return res
}
