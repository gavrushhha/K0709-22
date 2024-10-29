// Кривенко Артём

// №1

function* fibon() {
    let a = 0;
    let b = 1;

    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fib = fibon();

for (let i = 0; i < 10; i++) {
    console.log(fib.next().value);
}




// №2

async function* fetchUsers(userIds) {
    for (const userId of userIds) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      if (response.ok) {
        const userData = await response.json();
        yield userData;
      } else {
        yield `Ошибка`;
      }
    }
  }

  const userIds = [1, 2, 3];
  const userGenerator = fetchUsers(userIds);
  
  (async () => {
    for await (const user of userGenerator) {
      console.log(user);
    }
  })();





// №3

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function* lazyLoadImages(images) {
    for (const image of images) {
      await delay(1000);
      yield `Загружено: ${image}`;
    }
  }

  const imagePaths = ["image1.jpg", "image2.jpg", "image3.jpg"];
  const imageLoader = lazyLoadImages(imagePaths);
  
  (async () => {
    for await (const message of imageLoader) {
      console.log(message);
    }
  })();





// №4

function* readFiles(files) {
    for (const file of files) {
      yield file;
    }
  }

  const fileNames = ["file1.txt", "file2.txt", "file3.txt"];
  const fileReader = readFiles(fileNames);
  
  for (const file of fileReader) {
    console.log(file);
  }




// №5

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function* delayedCounter(max, delayMs) {
    for (let i = 1; i <= max; i++) {
      await delay(delayMs);
      yield i;
    }
  }

  const max = 5;
  const delayMs = 500;
  const counter = delayedCounter(max, delayMs);
  
  (async () => {
    for await (const num of counter) {
      console.log(num);
    }
  })();





// №6

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function* checkServerStatus() {
    while (true) {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/4');
      const data = await response.json();

      const status = data.completed ? "OK" : "NOT OK";
      yield status;
  
      if (status === "OK") {
        return;
      }
      
      await delay(1000);
    }
  }

  async function monitorServer() {
    const statusChecker = checkServerStatus();
  
    for await (const status of statusChecker) {
      console.log(`Статус сервера: ${status}`);
      if (status === "OK") {
        console.log("Статус сервера OK");
        break;
      }
    }
  }

  monitorServer();
