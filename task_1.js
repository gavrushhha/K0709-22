
function IsPrime(number) {
    let dividers = 0;
    for (let i = 1; i < number+1; i++){
        if (number % i == 0) {
            dividers += 1;
        }
    }
    if (dividers != 2) {
        return false;
    }
    return true;
}

for (let i = 2; i < 21; i++) {
    console.log(IsPrime(i))
}