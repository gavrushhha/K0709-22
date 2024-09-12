function isPrime(number) {
    if (number > 1) {
        for (let divisor = 2; divisor <= Math.sqrt(number); i++) {
            if (number % divisor == 0) return false
        }
        return true
    }
    return false
}

for (let number = 2; number <= 20; number++) {
    console.log(number, isPrime(number))
}