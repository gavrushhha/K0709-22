function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

console.log(formatDate(new Date()));

function getDaysDifference(date1, date2) {
    const msPerDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((date2 - date1) / msPerDay));
}

const date1 = new Date('2022-10-07');
const date2 = new Date('2024-10-07');
console.log(getDaysDifference(date1, date2));