class Task {
    constructor(id, pre_tasks = [], duration, priority = 1) {
        this.id = id;                   // Уникальный идентификатор задачи
        this.pre_tasks = pre_tasks;     // Зависимые задачи
        this.done = false;              // Статус выполнения
        this.duration = duration;       // Длительность выполнения
        this.priority = priority;       // Приоритет задачи
    }
}

class Robot {
    constructor(id) {
        this.id = id;               // Идентификатор робота
        this.task = null;           // Текущая задача
        this.idleTime = 0;          // Время простоя
        this.totalIdleTime = 0;     // Общий счетчик времени простоя
    }

    async performTask(task) {
        this.task = task;
        console.log(`Робот ${this.id} начал выполнение задачи ${task.id}`);

        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Робот ${this.id} завершил выполнение задачи ${task.id}`);
                task.done = true;
                this.task = null;
                resolve(); // Сообщаем о завершении задачи
            }, task.duration * 1000); // Симулируем время выполнения задачи
        });
    }

    incrementIdleTime() {
        this.idleTime += 1;          // Увеличиваем время простоя
        this.totalIdleTime += 1;     // Общий счетчик времени простоя для робота
    }

    resetIdleTime() {
        this.idleTime = 0;           // Сбрасываем время простоя для текущего цикла
    }
}

class Factory {
    constructor(tasks, robots) {
        this.tasks = tasks;             // Список задач
        this.robots = robots;           // Список роботов
    }

    getAvailableTasks() {
        return this.tasks.filter(task => !task.done && task.pre_tasks.every(tid => this.tasks.find(t => t.id === tid && t.done)));
    }

    async assignTasks() {
        let allTasksDone = false;
        while (!allTasksDone) {
            let availableTasks = this.getAvailableTasks().sort((a, b) => b.priority - a.priority);

            // Проверяем всех роботов и назначаем задачи свободным
            for (let robot of this.robots) {
                if (robot.task === null && availableTasks.length > 0) {
                    let task = availableTasks.shift();
                    await robot.performTask(task);
                } else if (robot.task === null) {
                    robot.incrementIdleTime(); // Если робот простаивает, увеличиваем время простоя
                }
            }

            allTasksDone = this.tasks.every(task => task.done);

            // Пауза между циклами распределения задач
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }

        console.log('Все задачи выполнены.');
        this.printIdleTimeStats();
    }

    printIdleTimeStats() {
        console.log('Статистика времени простоя роботов:');
        for (let robot of this.robots) {
            console.log(`Робот ${robot.id}: Общее время простоя = ${robot.totalIdleTime} секунд.`);
        }
    }
}

// Пример задач
let tasks = [
    new Task(1, [], 5, 2),         // Задача 1, без зависимостей, длительность 5 сек, приоритет 2
    new Task(2, [1], 3, 1),        // Задача 2, зависит от задачи 1, длительность 3 сек, приоритет 1
    new Task(3, [], 4, 3),         // Задача 3, без зависимостей, длительность 4 сек, приоритет 3
    new Task(4, [2, 3], 2, 2),
    new Task(5, [2, 3], 2, 2),
    new Task(6, [2, 3], 2, 2),   // Задача 4, зависит от задач 2 и 3, длительность 2 сек, приоритет 2
];

// Пример роботов
let robots = [
    new Robot(1),
    new Robot(2),
    new Robot(3)
];

// Создаем фабрику и запускаем симуляцию
let factory = new Factory(tasks, robots);
factory.assignTasks();