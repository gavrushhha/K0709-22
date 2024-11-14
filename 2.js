const sumProperty = (arr, property) => {
    let sum = 0;
    for (const obj of arr) {
      sum += obj[property];
    }
    return sum;
  };
  
  const data = [{ id: 1, amount: 10 }, { id: 2, amount: 20 }, { id: 3, amount: 15 }];
  
  const sum = sumProperty(data, 'amount');
  
  console.log(sum);
