function getUniqueValues(arr) {
    return [...new Set(arr)];
}

const testArray = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6];
const uniqueValues = getUniqueValues(testArray);
console.log(uniqueValues);
