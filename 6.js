const memoize = (func) => {
    const cache = new Map();
  
    return (...args) => {
      const key = JSON.stringify(args);
  
      if (cache.has(key)) {
        return cache.get(key);
      } else {
        const result = func(...args);
        cache.set(key, result);
        return result;
      }
    };
  };
  
  const expensiveFunction = (n) => {
    console.log(`Вычисляем ${n}!`);
    return n * n;
  };
  
  const memoizedExpensiveFunction = memoize(expensiveFunction);
  
  console.log(memoizedExpensiveFunction(5));
  console.log(memoizedExpensiveFunction(5)); 
  console.log(memoizedExpensiveFunction(10));
  console.log(memoizedExpensiveFunction(10));
  console.log(memoizedExpensiveFunction(5,2));
  
  
  