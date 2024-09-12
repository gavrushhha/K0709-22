let students = ['Анна', 'Иван', 'Мария', 'Алексей', 'Екатерина']

students.forEach((name, index) => {
    console.log('Студент ' + name +', ваш порядковый номер: ' + index)
})

function findLongestName(names) {
    let longestName = names[0]
    names.forEach(name => {
        if (name.length > longestName.length) {
            longestName = name
        }
    })
    return longestName
}

console.log(findLongestName(students))