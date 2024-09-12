function formatDate(date) {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}

console.log(formatDate(new Date(Date.now())))


function subDate(date1, date2) {
    return Math.floor((date1 - date2) / (1000 * 60 * 60 * 24));
}
