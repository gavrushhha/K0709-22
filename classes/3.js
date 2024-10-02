class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

class Library {
    constructor() {
        this.books = [];
    }
}

Library.prototype.addBook = function (book) {
    this.books.push(book);
};

Library.prototype.findBooksByAuthor = function (author) {
    return this.books.filter(function (book) {
        return book.author === author;
    });
};

Library.prototype.listAllBooks = function () {
    if (this.books.length === 0) {
        console.log('Библиотека пуста.');
    } else {
        console.log('Список всех книг:');
        this.books.forEach(function (book) {
            console.log(`${book.title} — ${book.author} (${book.pages} страниц)`);
        });
    }
};

function LibraryUser(name) {
    this.name = name;
    this.borrowedBooks = [];
}

LibraryUser.prototype.borrowBook = function (book, library) {
    if (this.borrowedBooks.length >= 3) {
        console.log(`${this.name} не может взять больше 3 книг одновременно.`);
        return;
    }
    const index = library.books.indexOf(book);
    if (index !== -1) {
        this.borrowedBooks.push(book);
        library.books.splice(index, 1);
        console.log(`${this.name} взял(а) книгу "${book.title}".`);
    } else {
        console.log(`Книга "${book.title}" недоступна в библиотеке.`);
    }
};

LibraryUser.prototype.returnBook = function (book, library) {
    const index = this.borrowedBooks.indexOf(book);
    if (index !== -1) {
        this.borrowedBooks.splice(index, 1);
        library.addBook(book);
        console.log(`${this.name} вернул(а) книгу "${book.title}" в библиотеку.`);
    } else {
        console.log(`${this.name} не имеет книги "${book.title}".`);
    }
};

const book1 = new Book('Мастер и Маргарита', 'Михаил Булгаков', 500);
const book2 = new Book('Война и мир', 'Лев Толстой', 1200);
const book3 = new Book('Анна Каренина', 'Лев Толстой', 900);

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.listAllBooks();

const user = new LibraryUser('Иван');

user.borrowBook(book1, library);
user.borrowBook(book2, library);
user.borrowBook(book3, library);


library.listAllBooks();

user.returnBook(book1, library);
user.borrowBook(book3, library);

library.listAllBooks();