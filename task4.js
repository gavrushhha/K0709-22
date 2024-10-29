function* readFiles(files) {
    for (const file of files) {
        yield file
    }
}

const loader = readFiles(["file1.txt", "file2.txt", "file3.txt"])
console.log(loader.next().value)
console.log(loader.next().value)
console.log(loader.next().value)
