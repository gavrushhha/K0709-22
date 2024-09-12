function isPrime(number) {
  for (let i = 2; i <= Math.floor(number**0.5); i++) {
      if (number % i === 0) {
          return false;
      }
  }
  return true;
}

for (let i = 2; i < 22 + 1; i++) {
    console.log(i, isPrime(i))
}
