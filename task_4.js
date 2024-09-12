var students = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"];

for (let i = 0; i < students.length; i++) {
    console.log(`Студент: ${students[i]}, ваш порядковый номер (на рукаве): ${i}`)
};

function findLongestName(names) {
    let longest_name = '';
    for (let i = 0; i < names.length; i++) {
        if (names[i].length > longest_name.length) {
            longest_name = names[i]
        }
    }
    return longest_name;
}

console.log(findLongestName(students));