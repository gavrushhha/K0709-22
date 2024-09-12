const array = [];
for (i = 0; i < 11; i++)
    array[i] = Math.random();


function findMinMax(array) {
  return {max: Math.max(...array), min: Math.min(...array)}
}

// console.log(array);
console.log(findMinMax(array));
