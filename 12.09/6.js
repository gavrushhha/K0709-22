function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('Hello'))

function removeVowels(str) {
    return str.replace(/[aeiouAEIOUаоуяиэюые]/g, '');
}

console.log(removeVowels('Привет'))