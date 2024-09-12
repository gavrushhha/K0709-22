const students = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"];

for(let i = 0; i < students.length; i++){
    console.log(`Студент: ${students[i]}, ваш порядковый номер: ${i}`);
}

function findLongestName(students){
    for(let i = 0; i < students.length; i++){
        result = '';
        if(result < students[i].length) {
            result = students[i];
        }
    }
    return 'самое длинное имя в массиве: ' + result;
}

console.log(findLongestName(students));
