const randArray = Array(10).fill().map(() => Math.floor(Math.random() * 100));

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

const result = findMinMax(randArray);
console.log(randArray);
console.log(result);