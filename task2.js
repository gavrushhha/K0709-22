async function* fetchUsers(users) {
    for (const user of users){
        console.log(`request for user ${user}`)
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
        const data = await response.json();
        yield data;
    }
}

const users = [1, 2, 3];


(async () => {
    const info = fetchUsers(users);
    for await (const user of info){
        console.log(user)
    }
})();