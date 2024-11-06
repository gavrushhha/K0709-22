async function* fetchUsers(userIds) {
    for (const userId of userIds) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
            throw new Error(`Ошибка при получении данных для пользователя с ID ${userId}`);
        }
        const userData = await response.json();
        yield userData;
    }
}

const userIds = [1, 2, 3];

(async () => {
    try {
        const userGenerator = fetchUsers(userIds);

        for await (const user of userGenerator) {
            console.log(user);
        }
    } catch (error) {
        console.error(error);
    }
})();