const data = [{score: 20}, {score: 30}]

function findNested(data, path) {
    return path.split('.').reduce((acc, cur) => {
            return acc[cur]
    }, data)
}

function averageProperty(items, path) {
    return items.reduce((acc, o) => acc + findNested(o, path), 0)
}

console.log(averageProperty(data, "score"))
