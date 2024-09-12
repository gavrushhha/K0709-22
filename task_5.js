let date = new Date(2024, 8, 4, 12);
let curr_date = new Date();

function show_date(daytime) {
    return `${daytime.getDate()}.${daytime.getMonth()+1}.${daytime.getFullYear()} ${daytime.getHours()}:${daytime.getMinutes()}`
}

console.log(curr_date)
console.log(show_date(curr_date))

function timedelta(date1, date2) {
    if (date1 > date2) {
    return (date1 - date2) / 86400000
    }
    return (date2 - date1) / 86400000
}

console.log(timedelta(date, curr_date))