class Task {
    constructor(id, pre_tasks = [], duration, priority = 1) {
        this.id = id;
        this.pre_tasks = pre_tasks;
        this.done = false;
        this.duration = duration;
        this.priority = priority;
    }
}

class Robot {
    constructor(id) {
        this.id = id;
        this.task = null;
        this.idleTime = 0;
        this.totalIdleTime = 0;
    }

    async performTask(task) {
        this.task = task;
        console.log(`Робот ${this.id} начал выполнение задачи ${task.id}`);

        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Робот ${this.id} завершил выполнение задачи ${task.id}`);
                task.done = true;
                this.task = null;
                resolve();
            }, task.duration * 1000);
        });
    }

    incrementIdleTime() {
        this.idleTime += 1;
        this.totalIdleTime += 1;
    }

    resetIdleTime() {
        this.idleTime = 0;
    }
}

class Factory {
    constructor(tasks, robots) {
        this.tasks = tasks;
        this.robots = robots;
    }

    getAvailableTasks() {
        return this.tasks.filter(task => !task.done && task.pre_tasks.every(tid => this.tasks.find(t => t.id === tid && t.done)));
    }

    async assignTasks() {
        let allTasksDone = false;
        while (!allTasksDone) {
            let availableTasks = this.getAvailableTasks().sort((a, b) => b.priority - a.priority);

            for (let robot of this.robots) {
                if (robot.task === null && availableTasks.length > 0) {
                    let task = availableTasks.shift();
                    await robot.performTask(task);
                } else if (robot.task === null) {
                    robot.incrementIdleTime();
                }
            }

            allTasksDone = this.tasks.every(task => task.done);

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

let tasks = [
    new Task(1, [], 5, 2),
    new Task(2, [1], 3, 1),
    new Task(3, [], 4, 3),
    new Task(4, [2, 3], 2, 2),
    new Task(5, [2, 3], 2, 2),
    new Task(6, [2, 3], 2, 2),
];

let robots = [
    new Robot(1),
    new Robot(2),
    new Robot(3)
];

let factory = new Factory(tasks, robots);
factory.assignTasks();