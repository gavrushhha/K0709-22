async function* lazyLoadImages(ids) {
    for (const id of ids) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()
        yield data
    }
}

const userIds = [1, 2, 3];



(async () => {
    const users = lazyLoadImages(userIds)
    for await (const user of users) {
        console.log(user)
    }
})()
