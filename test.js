// 1
function createMultiplier(x) {
    return function(y) {
        return x * y;
    };
}

const multipler1 = createMultiplier(2);
console.log(multipler1(5));

const multipler2 = createMultiplier(3);
console.log(multipler2(4));



// 2
function sumSquare(arr) {
    return arr.reduce((sum, num) => sum + num * num, 0);
}

const array = [3, 23, 4, 7, 19, 10] // 9 + 529 + 16 + 49 + 361 + 100 = 1064 
const answer = sumSquare(array);
console.log(answer);
