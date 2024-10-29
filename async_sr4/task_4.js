function* readFiles(files) {
    for (const file of files) {
        yield file
    }
}

const files = ["file1.txt", "file2.txt", "file3.txt"]

reader = readFiles(files)
for (const file of reader) {
    console.log(file)
}