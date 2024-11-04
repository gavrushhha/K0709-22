async function* fetchUser(userIds) {
     for (let userid of userIds) {
       const user_data = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
       const data = await user_data.json()
       yield data

     }
 }

const userIds = [1, 2, 3];


(async() => {
     const users_Data = fetchUser(userIds)
     for await (const userid of userIds) {
     console.log(`Для ${userid}`)
     console.log((await users_Data.next()).value)
}})()