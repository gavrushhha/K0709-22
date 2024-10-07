// ====================== Игровой персонаж ======================

let player = {
    name: 'Исследователь',
    health: 100,
    inventory: [],
    location: 'start'
};

// ====================== Локации ======================

const locations = {
    start: {
        name: 'Начальная деревня',
        description: 'Тихая деревня, окруженная густым лесом.',
        choices: [
            { text: 'Пойти в лес', nextLocation: 'forest' },
            { text: 'Заглянуть на рынок', nextLocation: 'market' }
        ]
    },
    forest: {
        name: 'Темный лес',
        description: 'Опасный лес, полный загадок и сокровищ.',
        choices: [
            { text: 'Искать ягоды', event: 'findBerries' },
            { text: 'Углубиться в лес', nextLocation: 'deepForest' }
        ]
    },
    market: {
        name: 'Рынок',
        description: 'Шумный рынок с товарами на любой вкус.',
        choices: [
            { text: 'Купить зелье за 10 монет', event: 'buyPotion' },
            { text: 'Поговорить с торговцем', event: 'meetMerchant' }
        ]
    }
};

// ====================== Показ локации ======================

function showLocation(location) {
    console.log(`Вы находитесь в: ${location.name}`);
    console.log(location.description);
    console.log('Ваши действия:');
    location.choices.forEach((choice, index) => {
        console.log(`${index + 1}. ${choice.text}`);
    });
}

// ====================== Перемещение между локациями ======================

function moveToLocation(nextLocation, callback) {
    console.log('Перемещаемся в новую локацию...');
    setTimeout(() => {
        player.location = nextLocation;
        callback();
    }, 2000);  // Задержка 2 секунды для имитации перемещения
}

// ====================== Выполнение события ======================

function performEvent(event) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            switch (event) {
                case 'findBerries':
                    console.log('Вы нашли ягоды! Здоровье увеличилось на 10.');
                    player.health += 10;
                    break;
                case 'buyPotion':
                    console.log('Вы купили зелье. Оно добавлено в инвентарь.');
                    player.inventory.push('Зелье');
                    break;
                case 'meetMerchant':
                    console.log('Вы встретили торговца. Он предложил вам редкий товар.');
                    break;
                default:
                    reject('Неизвестное событие!');
            }
            resolve();
        }, 1500);  // Задержка 1.5 секунды для выполнения события
    });
}

// ====================== Основной цикл игры ======================

async function gameLoop() {
    while (player.health > 0) {
        const currentLocation = locations[player.location];
        showLocation(currentLocation);

        // Запрос выбора действия у игрока
        let actionIndex = await getPlayerChoice(currentLocation.choices.length);
        let choice = currentLocation.choices[actionIndex - 1];

        if (choice.nextLocation) {
            await new Promise(resolve => moveToLocation(choice.nextLocation, resolve));
        } else if (choice.event) {
            await performEvent(choice.event);
        }

        // Проверка на завершение игры
        if (player.health <= 0) {
            console.log('Вы проиграли! Ваше здоровье исчерпано.');
            break;
        }

        // Здесь можно добавить проверку на победу или неожиданные концовки
    }
}

// ====================== Функция для выбора действия игрока ======================

function getPlayerChoice(maxChoices) {
    return new Promise((resolve) => {
        // Имитация времени на раздумья для выбора действия
        setTimeout(() => {
            const choice = Math.floor(Math.random() * maxChoices) + 1;  // Случайный выбор для примера
            console.log(`Вы выбрали действие ${choice}`);
            resolve(choice);
        }, 1000);  // Задержка для имитации времени на раздумья
    });
}

// ====================== Запуск игры ======================

console.log('Добро пожаловать в "Мир путешествий"!');
gameLoop();
