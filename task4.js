function* readFiles(dir) {
    for (const file of dir){
        yield file;
    }
}

const dir = ["file1.txt", "file2.txt", "file3.txt"];


const files = readFiles(dir);

for (let i = 0; i < dir.length; i += 1) {
  console.log(files.next().value);
}