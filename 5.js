function formatDate(date) {
    let day = String(date.getDate()).padStart(2, '0')
    let month = String(date.getMonth() + 1).padStart(2,  '0')
    let year = String(date.getFullYear()).padStart(4, '0')
    let hours = String(date.getHours()).padStart(2, '0')
    let minutes = String(date.getMinutes()).padStart(2, '0')
    return `${day}.${month}.${year} ${hours}:${minutes}`
}

console.log(formatDate(new Date()))

function daysBetween(start, end) {
    let diffTime = Math.abs(start.getTime() - end.getTime())
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

console.log(daysBetween(new Date(), new Date("2024-09-15")))