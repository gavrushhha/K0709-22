//1
function* fibonacci() {
    let curr = 0, next = 1;
    while (true) {
        yield curr; 
        [curr, next] = [next, curr + next]; 
    }
}

const fibGen = fibonacci();

for (let i = 0; i < 10; i++) {
    console.log(fibGen.next().value);
}

//2
async function* fetchUsers(userIds) {
    for (const userId of userIds) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
            throw new Error(`Ошибка при получении данных о пользователе с ID ${userId}: ${response.statusText}`);
        }
        const userData = await response.json(); 
        yield userData;
    }
}

(async () => {
    const userIds = [1, 2, 3]; 
    const userFetcher = fetchUsers(userIds);

    for await (const user of userFetcher) {
        console.log(user); 
    }
})();

//3
function* lazyLoadImages(images) {
    for (const image of images) {
        yield new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Загружено: ${image}`); 
                resolve(); 
            }, 1000);
        });
    }
}


const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

const imageLoader = lazyLoadImages(images);

async function loadImages() {
    for (const promise of imageLoader) {
        await promise; 
    }
}

loadImages();

//4
function* readFiles(files) {
    for (const file of files) {
        yield file; 
    }
}

const files = ["file1.txt", "file2.txt", "file3.txt"];

const fileReader = readFiles(files);

console.log(fileReader.next().value)
console.log(fileReader.next().value)
console.log(fileReader.next().value)


//5
async function* delayedCounter(max, delay) {
    for (let i = 1; i <= max; i++) {
        await new Promise(resolve => setTimeout(resolve, delay)); 
        yield i;
    }
}


(async () => {
    const max = 5;
    const delay = 500; 
    const counter = delayedCounter(max, delay);

    for await (const value of counter) {
        console.log(value); 
    }
})();

//6
async function* checkServerStatus() {
    while (true) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        const status = data.id === 1 ? "OK" : "NOT OK";
        yield status;
        if (status === "OK") {
            break;
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

(async () => {
    const statusChecker = checkServerStatus();

    for await (const status of statusChecker) {
        console.log(`Статус сервера: ${status}`);
        if (status === "OK") {
            break;
        }
    }
})();