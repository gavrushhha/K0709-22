function findPairs(arr, sum) {
    var answer = [];
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = i+1; j < arr.length; j += 1) {
            if (arr[i] + arr[j] == sum) {
                answer.push([arr[i], arr[j]])
            }
        }
    }
    return answer;
}


console.log(findPairs([1, 2, 3, 0.5, 2.5, 0], 3))
