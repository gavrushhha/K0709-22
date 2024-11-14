// 1 

function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
        yield a; 
        [a, b] = [b, a + b]; 
    }
}


// 2

async function* fetchUsers(users_ids) {
    for (const user_id of users_ids) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`)
        const user = await response.json()
        yield user
    }
}

const ids = [1, 2, 3];

(async () => {
    const users = fetchUsers(ids)
    for await (const user of users) {console.log(user)}})()


// 3

function* lazyLoadImages(imagePaths) {
    for (const imagePath of imagePaths) {
        yield new Promise((resolve) => {setTimeout(() => {console.log(`Loaded: ${imagePath}`); resolve();}, 1000);});
    }
}

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
(async () => {const imageGenerator = lazyLoadImages(images); for await (const _ of imageGenerator) {}})();


// 4

function* readFiles() {
    const files = ["file1.txt", "file2.txt", "file3.txt"];
    for (const file of files) {
        yield file; 
    }
}

const fileGenerator = readFiles();

console.log(fileGenerator.next().value)
console.log(fileGenerator.next().value)
console.log(fileGenerator.next().value)


// 5

async function* delayedCounter(max, delay) {
    for (let i = 1; i <= max; i++) {
        await new Promise(resolve => setTimeout(resolve, delay)); 
        yield i; 
    }
}


(async () => {const max = 5; const delay = 500;
    for await (const value of delayedCounter(max, delay)) {
        console.log(value); 
    }})();


// 6

async function* checkServerStatus(delay) {
    while (true) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
        const answer = await response.json();

        if (answer.completed){
            yield `OK`;
            break;
        } 

        else {
            yield `Not OK`; 
        }

        await new Promise(resolve => setTimeout(resolve, delay)); 
    }
}

(async () => {
    const generator = checkServerStatus(1000);

    for await (const status of generator) {
        console.log(status); 
        if (status === `OK`) {
            console.log(`Сервер вернулся к нормальной работе!`);
            break;
        }}})();
