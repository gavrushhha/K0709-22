const names = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"];

for (let i = 0; i < names.length; i++) {
    console.log("Студент " + names[i] + ", ваш порядковый номер: " + i)
}

function findLongestName(names) {
    let max = 0;
    let max_name;
    for (let name of names) {
        if (name.length > max) {
            max_name = name;
            max = name.length;
        }
    }
    return name;
}


// console.log(findLongestName(names));
