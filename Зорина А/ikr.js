// 1 доп задание 
function toCamelCase(str) {
    return str.split(' ').map((word, index) =>
        index === 0
          ? word                   
          : word.charAt(0) + word.slice(1) 
      )
      .join('');                  
}

console.log(`1 доп задание - Ответ: ${toCamelCase('сamel Case')}`)

// 2 доп задание
function getUnique(arr) {
    return [...new Set(arr)];
}

console.log(`2 доп задание - Ответ: ${getUnique([1, 2, 2, 3, 4, 4, 5])}`)
