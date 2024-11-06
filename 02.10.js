let books = [];

const addBook = (title, author, genre, year) => {
    books.push({
        title: title,
        author: author,
        genre: genre,
        year: year,
    });
    console.log(`Название: ${title}, Автор: ${author}, Жанр: ${genre}, Год: ${year} добавлена.`);
    console.log(`-----------------`);
};

const deleteBook = (index) => {
    if (books[index]) {
        const title = books[index].title;
        books.splice(index, 1);
        console.log(`Книга "${title}" удалена.`);
    } else {
        console.log(`Книга не найдена.`);
    }
    console.log(`-----------------`);
};

const updateBook = (index, title, author, genre, year) => {
    if (books[index]) {
        books[index].title = title;
        books[index].author = author;
        books[index].genre = genre;
        books[index].year = year;
        console.log(`Книга "${title}" обновлена.`);
    } else {
        console.log(`Книга не найдена.`);
    }
    console.log(`-----------------`);
};

const displayBooks = () => {
    console.log(`Список книг:`);
    books.forEach((book, index) => {
        console.log(`${index + 1} ${book.title}`);
    });
    console.log(`-----------------`);
};

const manageBooks = (action, titleOrIndex = null, author = null, genre = null, year = null) => {
    switch (action) {
        case `add`:
            if (titleOrIndex && author && genre && year) {
                addBook(titleOrIndex, author, genre, year);
            } else {
                console.log(`Данные не найдены`);
            }
            break;
        case `delete`:
            if (typeof titleOrIndex === 'number' && titleOrIndex >= 0) {
                deleteBook(titleOrIndex);
            } else {
                console.log(`Неверный индекс`);
            }
            break;
        case `update`:
            if (typeof titleOrIndex === 'number' && author && genre && year) {
                updateBook(titleOrIndex, author, genre, year);
            } else {
                console.log(`Данные не найдены`);
            }
            break;
        case `list`:
            displayBooks();
            break;
        default:
            console.log(`Неверно`);
    }
};

addBook(`Прогр`, `ффф`, `ужасы`, 1992);
addBook(`Работа`, `ббб`, `комедия`, 1833);
addBook(`Ljhjuf`, `eee`, `трагедия`, 1686);

displayBooks();
deleteBook(1);
displayBooks();
manageBooks(`add`, `Новая книга`, `ддд`, `драма`, 2024);
manageBooks(`update`, 2, `Обновленная книга`, `жжж`, `фантастика`, 2023);
displayBooks()
manageBooks(`delete`, 2);
manageBooks(`list`);
