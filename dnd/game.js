const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var player = {
    name: 'Player',
    health: 100,
    inventory: [],
    location: 'start',
};

var locations = {
    start: {
        name: 'Подземное плато',
        description: 'Луч света пробивается сквозь слой камня... Подземный тунель уходит вглубь...',
        choices: [
            {text: 'Исследовать', next: 'explore', max_usages: 24, usages: 0},
            {text: 'Карабкаться по стенам', next: 'climb', max_usages: 9, usages: 0},
            {text: 'Остаться на месте', next: 'stay', max_usages: 12, usages: 0},
            {text: 'Идти вглубь', next: 'tunnel'},
        ],
        explores: {number: 0},
    },
    tunnel: {
        name: 'Подземный тунель',
        description: 'Из глубин подземелья доносится зловещий скрежет. У вас плохое предчувствие.',
        choices: [
            {text: 'Исследовать', next: 'explore', max_usages: 1, usages: 0},
            {text: 'Вернуться обратно', next: 'start'},
            {text: 'Идти вглубь', next: 'old_mineshaft'},
        ],
        explores: {number: 0},
    },
    old_mineshaft: {
        name: 'Старая шахта',
        description: 'Спускаясь все глубже вы наткнулись на страую шахту. В надежде, что рельсы выведут вас отсюда, вы наполяетесь решимостью!',
        choices: [
            {text: 'Исследовать', next: 'explore', max_usages: 3, usages: 0},
            {text: 'Вернуться обратно', next: 'tunnel'},
            {text: 'Воспользоваться вагонеткой', next: 'minecart', min_explores: 1},
            {text: 'Тянуть рычаг', next: 'old_mineshaft_2', min_explores: 2, max_usages: 1, usages: 0},
            {text: 'Идти вглубь', next: 'old_mineshaft_3', min_explores: 3},
        ],
        explores: {number: 0},
    },
    old_mineshaft_2: {
        name: 'Старая шахта',
        description: 'Вы слышите, что привели в движение какой-то механизм...',
        choices: [],
        explores: {},
    },
    minecart: {
        name: 'Американские горки!?',
        description: 'Несясь на старой вагонетке по не менее старым путям в шахте, вы осознаете, что прочность этих конструкций уже не та...',
        end: true,
    }
}
locations.old_mineshaft_2.choices = locations.old_mineshaft.choices
locations.old_mineshaft_2.explores = locations.old_mineshaft.explores

function displayLocation(locationKey) {
    const location = locations[locationKey];
    console.log(`\n=== ${location.name} ===`);
    console.log(location.description);
    if (location.end) {
        console.log(`Конец игры!`);
        process.exit(0);
    }
    location.choices.forEach((choice, index) => {
        if ((!choice.min_explores || location.explores.number >= choice.min_explores) &&
            (!choice.max_usages || choice.usages < choice.max_usages)) {
            console.log(`${index + 1}. ${choice.text}`);
        }
    });

    rl.question(`\n>>> Ваш выбор: `, (answer) => {
        handleChoice(locationKey, parseInt(answer) - 1);
    });
}

function handleChoice(locationKey, choiceIndex) {
    const location = locations[locationKey];
    const choice = location.choices[choiceIndex];

    if (!choice) {
        console.log(`Неверный выбор. Попробуйте снова.`);
        return displayLocation(locationKey);
    }

    if (choice.max_usages && choice.usages >= choice.max_usages) {
        console.log(`Вы не можете выполнить это действие.`);
        return displayLocation(locationKey);
    }

    choice.usages = (choice.usages || 0) + 1;

    if (choice.next === 'explore') {
        location.explores.number++;
        console.log(`Вы исследовали локацию! Исследования: ${location.explores.number}`);
        displayLocation(locationKey)
    }
    else {
        player.location = choice.next || player.location;
        displayLocation(player.location);
    }
}

function startGame() {
    console.log(`Добро пожаловать в игру!`);
    displayLocation(player.location);
}

startGame();
