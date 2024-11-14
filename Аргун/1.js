function getUniqueValues(arr) {
    return Array.from(new Set(arr));
}

const items = [1, 2, 3, 4, 5, 1, 2, 3];
console.log(getUniqueValues(items));
