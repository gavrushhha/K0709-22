/* Напишите асинхронный генератор fetchUsers, который будет принимать массив идентификаторов пользователей и запрашивать данные для каждого пользователя по API, используя fetch. Используйте фиктивный URL https://jsonplaceholder.typicode.com/users/{userId} для запроса информации о пользователе.

Проверка:

Передайте в генератор массив const userIds = [1, 2, 3].
Выведите данные о каждом пользователе по мере их получения.
 */
async function* fetchUsers(userIds) {
    for (const userId of userIds) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await response.json();
        yield user;
    }
}

const userIds = [1, 2, 3];

(async () => {
    const generator = fetchUsers(userIds);
    for await (const user of generator) {
        console.log(user);
    }
})();