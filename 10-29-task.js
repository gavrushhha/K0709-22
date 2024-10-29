// 1

function* fibonacci(){
    let prev_num = 0;
    let cur_num = 1;
    while (true){
        let next_num = prev_num + cur_num;
        yield next_num;

        prev_num = cur_num;
        cur_num = next_num;
    }
}

const fib = fibonacci();
for (let i = 0; i < 10; i++) {
    console.log(fib.next().value);
}

// 2

async function* fetchUsers(userIds) {
    for (const userId of userIds){
        console.log(`Request for data of user with ID ${userId}`)
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const data = await response.json();
        yield data;
    }
}

const users = [1, 2, 3];
(async () => {
    const userGen = fetchUsers(users)
    for await (const user of userGen){
        console.log(user);
    }
})();

// 3
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function* lazyLoadImages(images) {
    for (const image of images) {
        await delay(1000);
        yield `Loaded: ${image}`;
    }
}
  
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
  
(async () => {
    for await (const image of lazyLoadImages(images)) {
        console.log(image);
    }
})();

// 4

function* readFiles(files) {
    for (const file of files) {
        yield file;
    }
}

const files = ['file1.txt', 'file2.txt', 'file3.txt'];
const fileReader = readFiles(files);

console.log(fileReader.next().value)
console.log(fileReader.next().value)
console.log(fileReader.next().value)

// 5

async function* delayedCounter(max, ms) {
    for (let i = 1; i <= max; i++) {
        await delay(ms);
        yield i;
    }
}
  
const max = 5;
const ms = 500;

(async () => {
    for await (const num of delayedCounter(max, ms)) {
        console.log(num);
    }
})();

// 6

async function* checkServerStatus() {
    while (true) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
        const data = await response.json();

        if (data) {
            yield "OK";
            return;
        } else {
            yield "ERROR";
        }

        await delay(1000);
    }
}

(async () => {
    for await (const status of checkServerStatus()){
        console.log(`Server status: ${status}`);
        if (status === 'OK') {
            console.log('Shutting down...');
            break;
        }
    }
})();