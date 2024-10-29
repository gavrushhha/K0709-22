function* readFiles() {
    const files = ["file1.txt", "file2.txt", "file3.txt"];
    for (const file of files) {
        yield file;
    }
}

const fileReader = readFiles();



console.log(fileReader.next().value);
console.log(fileReader.next().value);
console.log(fileReader.next().value);