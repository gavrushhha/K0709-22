
// 1
function* fibonacci() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fibGen = fibonacci();

for (let i = 0; i < 10; i++) {
    console.log(fibGen.next().value);
}



// 2
async function* fetchUsers(userIds) {
    for (const userId of userIds) {
        console.log(`request for data of user ${userId}`)
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userData = await response.json();
        yield userData;
    }
}

const userIds = [1, 2, 3];

(async () => {
    const userGenerator = fetchUsers(userIds);
    for await (const userData of userGenerator) {
        console.log(userData);
    }
})();



// 3
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function* lazyLoadImages(images) {
    for (const image of images) {
        await delay(1000);
        yield `Загружено: ${image}`;
    }
}

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

(async () => {
    for await (const message of lazyLoadImages(images)) {
        console.log(message);
    }
})();



// 4
function* readFiles() {
    const files = ["file1.txt", "file2.txt", "file3.txt"];
    for (let file of files) {
      yield file;
    }
}
  
const fileReader = readFiles();
for (let file of fileReader) {
    console.log(file);
}

  

// 5
async function* delayedCounter(max, delay) {
    for (let i = 1; i <= max; i++) {
      await new Promise(resolve => setTimeout(resolve, delay));
      yield i;
    }
}

(async () => {
for await (let num of delayedCounter(5, 500)) {
    console.log(num);
}
})();



// 6
async function* checkServerStatus() {
    while (true) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        const status = data.id === 1 ? "OK" : "NOT OK";
        yield status;
        if (status === "OK") {break}
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

(async () => {
    const statusChecker = checkServerStatus();
    for await (const status of statusChecker) {
        console.log(`Статус сервера: ${status}`);
        if (status === "OK") {
            console.log("Сервер в порядке");
            break;
        }
    }
})();
