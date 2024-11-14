function getUniqueValues(arr) {
    let uniqRes = new Set(arr);
    let resArr = [];

    for (let val of uniqRes) {
        resArr.push(val);
    }

    return resArr;
}

console.log(getUniqueValues([1, 2, 2, 3]))
