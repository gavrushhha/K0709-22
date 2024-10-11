const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lastMessage = '';

let player = {
    name: 'Исследователь',
    health: 100,
    inventory: [],
    location: 'start',
    coins: 100,
    berriesCollected: false // Флаг для отслеживания сбора ягод
};

const locations = {
    start: {
        name: 'Начальная деревня',
        description: 'Тихая деревня, окруженная густым лесом.',
        choices: [
            { text: 'Пойти в лес', nextLocation: 'forest' },
            { text: 'Заглянуть на рынок', nextLocation: 'market' },
            { text: 'Посмотреть инвентарь', event: 'showInventory' },
            { text: 'Показать статусы', event: 'showStats' }
        ]
    },
    forest: {
        name: 'Темный лес',
        description: 'Опасный лес, полный загадок и сокровищ.',
        choices: [
            { text: 'Искать ягоды', event: 'findBerries' },
            { text: 'Углубиться в лес', nextLocation: 'deepForest' },
            { text: 'Вернуться в деревню', nextLocation: 'start' },
            { text: 'Посмотреть инвентарь', event: 'showInventory' },
            { text: 'Показать статусы', event: 'showStats' }
        ]
    },
    deepForest: {
        name: 'Глубокий лес',
        description: 'Еще более темный и загадочный лес, здесь могут водиться опасные звери.',
        choices: [
            { text: 'Сражаться с волком', event: 'fightWolf' },
            { text: 'Поискать сокровища', event: 'findTreasure' },
            { text: 'Вернуться в лес', nextLocation: 'forest' },
            { text: 'Посмотреть инвентарь', event: 'showInventory' },
            { text: 'Показать статусы', event: 'showStats' }
        ]
    },
    market: {
        name: 'Рынок',
        description: 'Шумный рынок с товарами на любой вкус.',
        choices: [
            { text: 'Купить зелье за 10 монет', event: 'buyPotion' },
            { text: 'Поговорить с торговцем', event: 'meetMerchant' },
            { text: 'Вернуться в деревню', nextLocation: 'start' },
            { text: 'Посмотреть инвентарь', event: 'showInventory' },
            { text: 'Показать статусы', event: 'showStats' }
        ]
    }
};

function clearScreen() {
    // Очищаем экран
    process.stdout.write('\x1B[2J\x1B[0f');
    // Выводим последнее сообщение, если оно есть
    if (lastMessage) {
        console.log(lastMessage);
        lastMessage = ''; // Очищаем сообщение после отображения
    }
}


const puzzles = [
    { question: 'Какой ответ на вопрос: сколько будет 20 + 22?', answer: '42' },
    { question: 'Какой цвет получается при смешивании красного и синего?', answer: 'фиолетовый' },
    { question: 'Сколько ног у паука?', answer: 'восемь' },
    { question: 'Сколько дней в неделе?', answer: 'семь' },
    { question: 'Какой месяц идет после декабря?', answer: 'январь' }
];

async function gameLoop() {
    while (true) {
        const location = locations[player.location];
        console.clear();
        console.log(location.name);
        console.log(location.description);

        location.choices.forEach((choice, index) => {
            console.log(`${index + 1}. ${choice.text}`);
        });

        const choice = await getPlayerChoice(location.choices.length);

        if (location.choices[choice - 1].nextLocation) {
            player.location = location.choices[choice - 1].nextLocation;
        } else if (location.choices[choice - 1].event) {
            await performEvent(location.choices[choice - 1].event);
        }
    }
}

async function getPlayerChoice(maxChoice) {
    return new Promise((resolve) => {
        rl.question('Введите номер действия: ', (answer) => {
            resolve(Number(answer));
        });
    });
}

async function performEvent(event) {
    switch (event) {
        case 'findBerries':
            await findBerries();
            break;
        case 'fightWolf':
            await fightWolf();
            break;
        case 'findTreasure':
            await findTreasure();
            break;
        case 'buyPotion':
            await buyPotion();
            break;
        case 'showInventory':
            await showInventory();
            break;
        case 'showStats':
            await showStats();
            break;
        case 'meetMerchant':
            await meetMerchant();
            break;
        default:
            console.log('Событие не определено.');
            break;
    }
}

async function findBerries() {
    clearScreen();
    if (!player.berriesCollected) {
        lastMessage = 'Вы собрали редкую ягоду и восстановили 10 HP!';
        player.health += 10;
        player.berriesCollected = true;
    } else {
        lastMessage = 'Вы уже собрали ягоды в этом лесу.';
    }
    await showStats();
}


async function fightWolf() {
    let wolfHealth = 60; // Здоровье волка
    let playerDamage;
    const attacks = [
        { name: 'Удар' },
        { name: 'Резкий удар' },
        { name: 'Прыжок' },
        { name: 'Тайный удар' },
        { name: 'Комбо' },
        { name: 'Смертельный удар' },
        { name: 'Огненный шар' },
        { name: 'Ледяное дыхание' }
    ];

    while (wolfHealth > 0 && player.health > 0) {
        console.log('Выберите атаку:');
        const randomAttacks = getRandomAttacks(attacks, 3);
        randomAttacks.forEach((attack, index) => {
            console.log(`${index + 1}. ${attack.name}`);
        });

        const choice = await getPlayerChoice(randomAttacks.length);

        if (choice < 1 || choice > randomAttacks.length) {
            console.log('Неправильный выбор, попробуйте снова.');
            continue;
        }

        playerDamage = Math.floor(Math.random() * 20) + 10; // Урон игрока
        wolfHealth -= playerDamage;

        const wolfDamage = Math.floor(Math.random() * 30) + 1; // Рандомный урон волка
        player.health -= wolfDamage;

        console.log(`Вы используете ${randomAttacks[choice - 1].name} и наносите ${playerDamage} урона волку.`);
        console.log(`Волк наносит вам ${wolfDamage} урона.`);
        
        console.log(`Здоровье волка: ${wolfHealth}`);
        console.log(`Ваше здоровье: ${player.health}`);
        
        // Проверка на смерть игрока
        if (player.health <= 0) {
            console.clear();
            console.log('Вы погибли в бою с волком!');
            console.log(`Здоровье: ${player.health}, Монеты: ${player.coins}`);
            await askRestart();
            return;
        }
    }

    // Проверка на победу после выхода из цикла
    if (wolfHealth <= 0) {
        console.clear();
        console.log('Вы победили волка!');
        player.inventory.push('Шкура волка'); // Добавление шкуры волка в инвентарь
        player.coins += 10; // Награда за победу
        await showStats();
    }
}

function getRandomAttacks(attacks, count) {
    const shuffled = attacks.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

async function findTreasure() {
    console.clear();
    const randomPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
    
    console.log('Вы начинаете искать сокровища и находите загадку:');
    console.log(randomPuzzle.question);
    
    const answer = await getPuzzleAnswer();

    if (answer.toLowerCase() === randomPuzzle.answer.toLowerCase()) {
        console.log('Вы решили загадку и получили 5 монет!');
        player.coins += 5; // Начисление монет за решение загадки
    } else {
        console.log('Неправильный ответ. Вы теряете 5 HP.');
        player.health -= 5;

        if (player.health <= 0) {
            console.clear();
            console.log('Вы погибли из-за неправильного ответа! Игра окончена.');
            await askRestart();
            return;
        }
    }
    
    await showStats();
}

async function buyPotion() {
    console.clear();
    if (player.coins >= 10) {
        player.coins -= 10;
        player.inventory.push('Зелье'); // Добавление зелья в инвентарь
        console.log('Вы купили зелье!');
    } else {
        console.log('У вас недостаточно монет для покупки зелья.');
    }
    await showStats();
}

async function meetMerchant() {
    console.clear();
    console.log('Вы встречаете торговца, который предлагает вам свои товары.');

    console.log('1. Обменять предметы на монеты:');
    console.log('2. Обменять монеты на 10 хп (20 монет за 10 хп).');
    console.log('3. Обменять 10 хп на 20 монет.');
    console.log('4. Купить редкий артефакт за 50 монет.');
    console.log('5. Вернуться назад.');

    const choice = await getPlayerChoice(5);
    if (choice === 1) {
        await exchangeItems();
    } else if (choice === 2) {
        await buyHealth();
    } else if (choice === 3) {
        await sellHealth();
    } else if (choice === 4) {
        await buyArtifact();
    } else if (choice === 5) {
        return; // Возврат к игре без изменений
    } else {
        console.log('Неправильный выбор.');
    }
    await pause();
}

async function exchangeItems() {
    console.clear();
    console.log('Выберите, что нужно обменять:');

    // Создаем объект с ценами предметов
    const itemPrices = {
        'Шкура волка': 15,
        'Зелье': 10,
        'Меч': 30,
        'Щит': 25,
        // Добавьте другие предметы и их цены по желанию
    };

    // Получаем предметы из инвентаря игрока
    const availableItems = player.inventory.filter(item => itemPrices[item]);

    if (availableItems.length === 0) {
        console.log('У вас нет предметов для обмена.');
        await pause();
        return;
    }

    // Выводим доступные предметы для обмена
    availableItems.forEach((item, index) => {
        console.log(`${index + 1}. ${item} - ${itemPrices[item]} монет`);
    });

    const itemChoice = await getPlayerChoice(availableItems.length);
    const selectedItem = availableItems[itemChoice - 1];

    await tradeItem(selectedItem, itemPrices[selectedItem]);
    // Показываем инвентарь после обмена
    await showInventory();
}

async function showInventory() {
    console.clear();
    if (player.inventory.length === 0) {
        console.log('Ваш инвентарь пуст.');
    } else {
        console.log('Ваш инвентарь:');
        player.inventory.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
    await pause(); // Можно добавить паузу перед возвратом в игру
}

async function pause() {
    return new Promise((resolve) => {
        rl.question('Нажмите Enter, чтобы продолжить...', () => {
            resolve();
        });
    });
}



async function tradeItem(item, price) {
    console.clear();
    if (player.inventory.includes(item)) {
        player.inventory = player.inventory.filter(i => i !== item); // Удаляем предмет из инвентаря
        player.coins += price; // Увеличиваем количество монет
        console.log(`Вы обменяли ${item} на ${price} монет.`);
    } else {
        console.log(`У вас нет ${item} в инвентаре.`);
    }
    await showStats();
}

// Остальные функции остаются без изменений


// Остальные функции остаются без изменений


// Остальные функции остаются без изменений


async function buyHealth() {
    console.clear();
    const healthCost = 20;

    if (player.coins >= healthCost) {
        player.coins -= healthCost; // Уменьшаем количество монет
        player.health += 10; // Увеличиваем здоровье
        console.log('Вы обменяли 20 монет на 10 хп.');
    } else {
        console.log('У вас недостаточно монет для обмена на хп.');
    }
    await showStats();
}

async function sellHealth() {
    console.clear();
    if (player.health > 10) { // Проверяем, достаточно ли здоровья для обмена
        player.coins += 20; // Начисляем 20 монет
        player.health -= 10; // Уменьшаем здоровье
        console.log('Вы обменяли 10 хп на 20 монет.');
    } else {
        console.log('У вас недостаточно хп для обмена на монеты.');
    }
    await showStats();
}

async function buyArtifact() {
    console.clear();
    const artifactCost = 50;

    if (player.coins >= artifactCost) {
        player.coins -= artifactCost; // Уменьшаем количество монет
        player.inventory.push('Редкий артефакт'); // Добавляем артефакт в инвентарь
        console.log('Вы купили редкий артефакт!');
    } else {
        console.log('У вас недостаточно монет для покупки редкого артефакта.');
    }
    await showStats();
}


async function tradeWolfSkin() {
    console.clear();
    const wolfSkinIndex = player.inventory.indexOf('Шкура волка');

    if (wolfSkinIndex !== -1) {
        player.inventory.splice(wolfSkinIndex, 1); // Удаляем шкуру волка из инвентаря
        player.coins += 15; // Начисляем 15 монет за шкуру волка
        console.log('Вы обменяли шкуру волка на 15 монет.');
    } else {
        console.log('У вас нет шкуры волка для обмена.');
    }
    await showStats();
}

async function showInventory() {
    console.clear();
    console.log('Ваш инвентарь:');
    console.log(player.inventory.length ? player.inventory.join(', ') : 'Инвентарь пуст.');
    await showStats();
}

async function showStats() {
    console.log(`Здоровье: ${player.health}, Монеты: ${player.coins}`);
    await pause();
}

async function getPuzzleAnswer() {
    return new Promise((resolve) => {
        rl.question('Введите ваш ответ: ', (answer) => {
            resolve(answer);
        });
    });
}

async function pause() {
    return new Promise((resolve) => {
        rl.question('Нажмите Enter, чтобы продолжить...', () => {
            resolve();
        });
    });
}

async function askRestart() {
    const answer = await new Promise((resolve) => {
        rl.question('Хотите начать заново? (да/нет): ', (input) => {
            resolve(input.toLowerCase());
        });
    });

    if (answer === 'да') {
        resetGame();
    } else {
        console.log('Спасибо за игру!');
        rl.close();
        process.exit();
    }
}

function resetGame() {
    player.health = 100;
    player.coins = 0;
    player.inventory = [];
    player.location = 'start';
    player.berriesCollected = false; // Сбрасываем флаг на сбор ягод
}

gameLoop();
