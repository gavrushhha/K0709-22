function* readFiles(fileNames) {
    for (const fileName of fileNames) {
        yield fileName;
    }
}

const files = ["file1.txt", "file2.txt", "file3.txt"];
const fileGenerator = readFiles(files);

for (const fileName of fileGenerator) {
    console.log(fileName);
}
