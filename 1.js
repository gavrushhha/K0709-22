const findObjectByProperty = (arr, property, value) => {
    for (const obj of arr) {
      if (obj[property] === value) {
        return obj;
      }
    }
    return null;
  };

const items = [{ id: 1, name: 'item1' }, { id: 2, name: 'item2' }];
  
const item1 = findObjectByProperty(items, 'id', 1);
const item2 = findObjectByProperty(items, 'id', 2);
const item3 = findObjectByProperty(items, 'id', 3);
  
console.log(item1);
console.log(item2);
console.log(item3);