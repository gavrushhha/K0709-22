// 1

function deepPropertyCount(obj) {
  let sum = 0;
  if (["number", "string", "boolean"].includes(typeof obj)) {
    return 0;
  }
  for (let i of Object.keys(obj)) {
    sum += 1 + deepPropertyCount(obj[i]);
  }
  return sum;
}

const data = {
  name: "Alice",
  details: { age: 25, address: { city: "New York City" } },
};
console.log("### 1 ###");
console.log(deepPropertyCount(data));

// 2

function groupBy(arr, property) {
  return arr.reduce((acc, obj) => {
    const key = obj[property];

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(obj);

    return acc;
  }, {});
}

const users = [
  { name: "Alice", group: "admin" },
  { name: "Bob", group: "user" },
  { name: "Charlie", group: "admin" },
];

const groupedUsers = groupBy(users, "group");
console.log("### 2 ###");
console.log(groupedUsers);

// 3

async function fetchWithTimeout(url, timeout) {
  return Promise.race([
    fetch(url),
    new Promise((resolve, _) =>
      setTimeout(() => resolve(new Error("Timeout exceeded")), timeout),
    ),
  ]);
}
(async () => {
  console.log("### 3 ###");
  console.log(await fetchWithTimeout("http://ya.ru", 10000));
})();

// 4

async function sequentialFetch(urls) {
  for (const url of urls) {
    try {
      console.log(url);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Ошибка сети");
      }
      console.log(response);
    } catch (error) {
      return `Ошибка в загрузке данных: ${error}`;
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  return "Все данные загружены успешно";
}

const urls = [
  "https://lks.siriusuniversity.ru",
  "https://docs.rust-lang.org",
  "https://tema.ru",
];

console.log("### 4 ###");
sequentialFetch(urls).then((result) => console.log(result));
