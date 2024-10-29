function* readFiles(files) {
    for (const file of files) {
        yield file;
    }
}

const files = ["file1.txt", "file2.txt", "file3.txt"];
const filesGen = readFiles(files);

for (const fileName of filesGen) {
    console.log(fileName);
}
