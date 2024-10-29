async function* fetchUsers(ids) {
    for (const id of ids) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const userData = await response.json();
        yield userData;
    }
}

const generator = fetchUsers([1,2,3]);

(async () => {
    for await (const user of generator) {
        console.log(user);
    }
})();
