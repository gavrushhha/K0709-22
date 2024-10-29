async function* fetchUsers(users_ids) {
    for (const user_id of users_ids) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`)
        const user = await response.json()
        yield user
    }
}

const users_ids = [1, 2, 3];

(async () => {
    const users = fetchUsers(users_ids)
    for await (const user of users) {
        console.log(user)
    }
})()