// 1 task
function filterNestedProperty(data, propertyPath) {
    const properties = propertyPath.split('.');

    return data.filter(item => {
        let current = item;
        
        for (const prop of properties) {
            if (current[prop] === undefined) {
                return false;
            }
            current = current[prop];
        }
        
        return current === true;
    });
}

const data = [
    { name: 'item', details: { active: true } },
    { name: 'item2', details: { active: false } },
];

const result = filterNestedProperty(data, 'details.active');
console.log(result);

// 2 task
function averageProperty(data, property) {
    if (!Array.isArray(data) || data.length === 0) {
        return 0;
    }

    const total = data.reduce((sum, item) => {
        if (typeof item[property] === 'number') {
            return sum + item[property];
        }
        return sum;
    }, 0);

    return total / data.length;
}

const items = [{ score: 20 }, { score: 30 }, { score: 40 }];
const averageScore = averageProperty(items, 'score');
console.log(averageScore); 

// 3 task
import axios from 'axios';

async function fetchWithRetryAndTimeout(url, timeout, retries) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {

            const response = await axios.get(url, { timeout });
            return response; 
            
        } catch (error) {
            if (error.code === 'ECONNABORTED') {
                console.log(`${attempt} попытка завершилась таймаутом, повтор запроса`);
            } else {
                console.log(`Ошибка, попытка ${attempt}: ${error.message}`);
                throw error;
            }

            if (attempt === retries) {
                throw new Error(`${retries} попытки завершились неудачно.`);
            }
        }
    }
}

const spoti = "https://spotify.com";
const timeout = 5000;
const retries = 3; 

fetchWithRetryAndTimeout(spoti, timeout, retries)
    .then(response => console.log("Response:", response.status))
    .catch(error => console.error("Error:", error.message));

//task 5
async function* fetchPagesWithStopCondition(url, maxPages) {
    let page = 1;
    
    while (page <= maxPages) {
        const response = await fetch(`${url}?page=${page}`);
        
        if (!response.ok) {
            break; 
        }
        
        const data = await response.json();
        
        if (data.length === 0) {
            break;
        }
        
        yield data;
        page++;
    }
}

const urls = [
    'https://spotify.com',
    'https://google.com',
    'https://vk.com'
];

async function fetchAllPages() {
    for (const url of urls) {
        for await (const data of fetchPagesWithStopCondition(url, 5)) {
            console.log(data);
        }
    }
}

fetchAllPages();
