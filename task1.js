function* Fibonacci() {
  let previous = 0;
  let current = 1;
  while (true) {
    yield previous;
    [previous, current] = [current, previous + current];
  }
}

const fibonacci = Fibonacci();

let i = 0;
for (let number of fibonacci) {
  console.log(number);
  i += 1;
  if (i >= 10) {
      break;
  }
}