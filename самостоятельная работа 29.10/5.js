/* Напишите асинхронный генератор delayedCounter, который принимает максимальное число и задержку в миллисекундах. Он должен возвращать числа от 1 до максимального с заданной задержкой.

Проверка:

Передайте в генератор max = 5 и задержку в 500 мс. Выведите каждое значение с указанной задержкой.
 */

async function* delayedCounter(max, delay) {
    for (let i = 1; i <= max; i++) {
        await new Promise(resolve => setTimeout(resolve, delay));
        yield i;
    }
}

// Тестируем генератор
const max = 5;
const delay = 500;

(async () => {
    const generator = delayedCounter(max, delay);
    for await (const value of generator) {
        console.log(value);
    }
})();