function averageProperty(arr, property_name) {
    let summa = 0;
    for (let i = 0; i < arr.length; i++) {
        summa = summa + arr[i][property_name]
    }
    return summa / arr.length;
}
  
const scores_data = [
    { score: 20 },
    { score: 30 },
    { score: 40 },
];

console.log(averageProperty(scores_data, 'score'));
  