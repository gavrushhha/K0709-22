const data = [{name: '', details: {active: true}}]

function findNested(data, path) {
    return path.split('.').reduce((acc, cur) => {
            return acc[cur]
    }, data)
}

function filterNestedProperty(data, path) {
    return data.filter((o) => findNested(o, path))
}

console.log(filterNestedProperty(data, "details.active"))
