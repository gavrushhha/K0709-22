function* readFiles(files) {
    for (let file of files) {
        yield file;
    }
}

const files = ['file1.txt', 'file2.txt', 'file3.qwe'];
const reader = readFiles(files);

for (let file of files) {
    console.log(reader.next().value)
}
