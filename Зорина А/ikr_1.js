// Вариант 1. Зорина Анастасия
// 1

function deepPropertyCount(obj) {
    let count = 0;

    function countProperties(object) {
        for (let key in object) {
          if (object.hasOwnProperty(key)) {
            count++;
            if (typeof object[key] === 'object' && object[key] !== null) {
              countProperties(object[key]);
            }
          }
        }
      }
    
      countProperties(obj);
      return count;
    }

const data = {
    name: 'Alice',
    details: {
        age: 25,
        address: {
        city: 'New York',
        zip: 10001
        }
    }
    };
    console.log(`Задание 1 - Ответ: ${deepPropertyCount(data)}`)