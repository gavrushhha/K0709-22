function truncate(str, length) {
    return str.length > length ? str.slice(0, length - 1) + '...' : str
}

console.log(truncate('Hello, World!', 3))