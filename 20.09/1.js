function findMax(arr){
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;

}
 arr = [1, 5, 19, 90, 45, 32, 78, 0];

 console.log(findMax(arr));