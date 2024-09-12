function removeVowels(string) {
    const vowels = 'аеёиоуыэюяaeiouy'
    let result = ''
    string.split('').forEach(letter => {
        if (!vowels.includes(letter.toLowerCase())) {
            result += letter
        }
    })
    return result
}

console.log(removeVowels('Привет, мир!'))