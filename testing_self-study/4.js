const students = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"];

for (let i = 0; i < students.length; i++) {
    console.log(`Студент: ${students[i]}, ваш порядковый номер: ${i}`);
}

function findLongName(students) {
    for (let i = 0; i < students.length; i++) {
        result = '';
        if (result < students[i].length) {
            result = students[i];
        }
    }
    return result;
}

console.log(findLongName(students));
