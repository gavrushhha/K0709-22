arr = [1, 2, 3];

console.log(arr.map((el, i) => el * 2));

console.log(arr.filter(el => el % 2 === 0));

arr.forEach(el => {
    console.log(el);
})

arr1 = [4, 5]

console.log(arr.concat(arr1))

arr2 = [6, 7]
arr2.push(8)
arr2.push(9)
lastItem = arr2.pop()
console.log(lastItem)
console.log(arr2)