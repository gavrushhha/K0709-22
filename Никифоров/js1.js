function filterNestedProperty(arr, proprety_path) {
    const [property, subproperty] = proprety_path.split('/');
    return arr.filter(
        item => item[property][subproperty] === true
    );
}

const nested_data1 = [
    {name: 'item1', details: {active: true }},
    {name: 'item2', details: {active: false }},
    {name: 'item3', details: {active: true }},
];


const nested_data2 = [
    {name: 'item1', details: {active: false }},
    {name: 'item2', details: {active: false }},
    {name: 'item3', details: {active: false }},
];

console.log(filterNestedProperty(nested_data, 'details/active'));

