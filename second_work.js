function replaceMultiplies(n) {
    for (let num = 1; num <= n; num++){
       if (num % 4 == 0 && num % 6 == 0) {
            console.log('FourSix')
       } else if (num % 4 == 0) {
        console.log('Four')
       }else if (num % 6 == 0) {
        console.log('Six')
       }else {
        console.log(num)
       }
       
    }
}

replaceMultiplies(12)


function findSecondLargest(arr) {
    const set = new Set(arr)
    console.log(Array.from(set).sort((a, b) => a-b).reverse()[1])
}

findSecondLargest([1, 3, 7, 8, 45, -2, -10])