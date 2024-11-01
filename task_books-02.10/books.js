let books = [];

const addBook = (title, author, zhanar, age) => {
    books.push({
        title: title,
        author: author,
        zhanar: zhanar,
        age: age,
    });
    console.log(`Книга "${title}" добавлена.`);
}

const deleteBook = (index) => {
    if (books[index]) {
        const bookTitle = books[index].title;
        books.splice(index, 1);
        console.log(`Книга "${bookTitle}" удалена.`);
    } else {
        console.log("Книга не найдена.");
    }
}

const updateBook = (index, newTitle) => {
    if (books[index]) {
        books[index].title = newTitle;
        console.log(`Имя книги обновлено на "${newTitle}".`);
    } else {
        console.log("Книга не найдена.");
    }
}

const displayBooks = () => {
    console.log("Список книг:");
    if (books.length === 0) {
        console.log("Нет книг в библиотеке.");
    } else {
        books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title} - ${book.author} - ${book.zhanar} - ${book.age}`);
        });
    }
}

const manageBooks = (action, index = null, title = null, author = null, zhanar = null, age = null) => {
    switch (action) {
        case 'add':
            if (title && author && zhanar && age) {
                addBook(title, author, zhanar, age);
            } else {
                console.log("Необходимо указать все данные для добавления книги.");
            }
            break;
        case 'delete':
            if (index !== null) {
                deleteBook(index);
            } else {
                console.log("Необходимо указать индекс элемента для удаления.");
            }
            break;
        case 'update':
            if (index !== null && title) {
                updateBook(index, title);
            } else {
                console.log("Необходимо указать индекс и новое имя книги для обновления.");
            }
            break;
        case 'list':
            displayBooks();
            break;
        default:
            console.log("Неизвестная команда.");
    }
}

addBook("ggg", "Короткий Жук", "Боевик", 2011)

manageBooks('add', null, "ffff", "Даня", "Приключение", 2023);
manageBooks('add', null, "aaa", "Миша", "Фэнтези", 1999);
manageBooks('list');

console.log("------");

manageBooks('delete', 2);
manageBooks('update', 1, "Новая версия хорошей книги))");
manageBooks('list');
