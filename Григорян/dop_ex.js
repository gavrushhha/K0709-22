function filterByRange(arr, min, max) {
    return arr.slice(min, max + 1);
}

console.log(`Вот 1 ${filterByRange([1,2,3,4,5], 2, 4)}`);

function isPalindrome(word) {
    return word === word.split().reverse().join('');
}

console.log(`Вот 2 ${isPalindrome('afa')}`)