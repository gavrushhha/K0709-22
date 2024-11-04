function* Fibbonachi() {
    let a = 1
    let b = 1
    while (true) {
        yield a
        let a2 = a
        a = b 
        b = a2 + b
    }
}

const a = Fibbonachi()

for (let i = 0; i <= 10; i++) {
    console.log(a.next().value);
    
}