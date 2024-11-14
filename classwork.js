// 1
function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

// Проверка 1
const fibGen = fibonacci();
for (let i = 0; i < 10; i++) {
    console.log('1 - ', fibGen.next().value);
}

//2
async function* fetchUsers(userIds) {
    for (const userId of userIds) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userData = await response.json();
        yield userData;
    }
}

// Проверка 2
const userIds = [1, 2, 3];
(async () => {
    const userGen = fetchUsers(userIds);
    for await (const user of userGen) {
        console.log('2 - ', user);
    }
})();



// 3
function* lazyLoadImages(images) {
    for (const image of images) {
        yield new Promise(resolve => {
            setTimeout(() => {
                console.log(`3 - Загружено: ${image}`);
                resolve();
            }, 1000);
        });
    }
}

// Проверка 3
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
(async () => {
    const imageGen = lazyLoadImages(images);
    for await (const image of imageGen) {}
})();


// 4
function* readFiles(files) {
    for (const file of files) {
        yield file;
    }
}

// Проверка 4
const files = ["file1.txt", "file2.txt", "file3.txt"];
const fileGen = readFiles(files);
for (const file of fileGen) {
    console.log('4 - ', file);
}


// 5
async function* delayedCounter(max, delay) {
    for (let i = 1; i <= max; i++) {
        await new Promise(resolve => setTimeout(resolve, delay));
        yield i;
    }
}

// Проверка 5
(async () => {
    const counterGen = delayedCounter(5, 500);
    for await (const value of counterGen) {
        console.log('5 - ', value);
    }
})();


// 6
async function* checkServerStatus() {
    while (true) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        yield response.status;

        if (response.status === 200) {
            break;
        }

        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

// Проверка 6
(async () => {
    const statusGen = checkServerStatus();
    for await (const status of statusGen) {
        console.log('6 - ', status);
    }
})();
