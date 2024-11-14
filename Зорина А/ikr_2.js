// 2

function groupBy(array, property) {
    return array.reduce((result, item) => {
        const key = item[property]
        if (!result[key]) {
            result[key] = []
        }
        result[key].push(item)
        return result }, {})
}
     
const users = [
    { name: 'Alice', group: 'admin' },
    { name: 'Bob', group: 'user' },
    { name: 'Charlie', group: 'admin' }
    ];
    
    console.log(groupBy(users, 'group'));