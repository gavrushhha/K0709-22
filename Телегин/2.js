function averageProperty(objs, name){
    let summ = 0;
    let count = 0;
    for (let obj of objs){
        summ += obj[name];
        count++;
    }
    return summ / count;
}

const items = [{score: 20}, {score: 30}, {score: 40}]
console.log(averageProperty(items, "score"))