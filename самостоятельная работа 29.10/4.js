/* Напишите генератор readFiles, который "читает" файлы из каталога. Используйте массив имён файлов и возвращайте каждое имя по одному при каждом вызове next(). Для упрощения задачи можно использовать массив ["file1.txt", "file2.txt", "file3.txt"], представляющий файлы в каталоге.

Проверка:

Создайте экземпляр генератора и выведите все имена файлов. */

function* readFiles(fileNames) {
    for (const fileName of fileNames) {
        yield fileName;
    }
}

// Тестируем генератор
const fileNames = ["file1.txt", "file2.txt", "file3.txt"];
const generator = readFiles(fileNames);

while (true) {
    const result = generator.next();
    if (result.done) {
        break;
    }
    console.log(`Читаем файл: ${result.value}`);
}