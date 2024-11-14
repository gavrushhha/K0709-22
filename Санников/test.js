function deepPropertyCount(obj) {
    let count = 0;

    function countProperties(currentObj) {
        for (let key in currentObj) {
            if (currentObj.hasOwnProperty(key)) {
                count++;
                if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
                    countProperties(currentObj[key]);
                }
            }
        }
    }

    countProperties(obj);
    return count;
}

const data = { name: 'Alice', details: { age: 25, address: { city: 'New York', zip: 10001 } } };
console.log(deepPropertyCount(data));


const users = [ { name: 'Alice', group: 'admin' }, { name: 'Bob', group: 'user' }, { name:
        'Charlie', group: 'admin' }, ];

function groupBy(array, property) {
    return array.reduce((result, item) => {
        const key = item[property];
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});
}

console.log(groupBy(users, 'group'));


async function fetchWithTimeout(url, timeout) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Время ожидания истекло"));
        }, timeout);
    });
    try {
        const response = await Promise.race([
            fetch(url),
            timeoutPromise
        ]);
        console.log('Успешно');
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

(async () => {
    const testUrl = 'https://lks.siriusuniversity.ru/schedule/groups';
    const timeoutDuration = 2000;

    try {
        const result = await fetchWithTimeout(testUrl, timeoutDuration);
    } catch (error) {
    }
})();
