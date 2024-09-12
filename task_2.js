const generateArray = (length, max) => (
    [...new Array(length)]
      .map(() => Math.round(Math.random() * max))
  );

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}
  

var arr = generateArray(10, 100)

function findMinMax(arr) {
    return {max: getMaxOfArray(arr), min: getMinOfArray(arr)};
}

console.log(findMinMax(arr));