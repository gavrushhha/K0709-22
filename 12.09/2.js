const predefinedArray = [3, 7, 2, 9, 1, 5, 8, 6, 4, 10];

function findMinMax(arr) {
    if (arr.length === 0) return { min: null, max: null };
    
    let min = Math.ceil(arr[0]);
    let max = Math.floor(arr[0]);
    
    for (let i = 1; i < arr.length; i++) {
        let value = arr[i];
        if (Math.ceil(value) < min) min = Math.ceil(value);
        if (Math.floor(value) > max) max = Math.floor(value);
    }
    
    return { min, max };
}

const result = findMinMax(predefinedArray);
console.log("Array:", predefinedArray);
console.log("Min and Max:", result);