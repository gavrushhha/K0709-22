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

Library.prototype.addBook = function(book) {
    this.books.push(book);
}

Library.prototype.findBooksByAuthor = function(author) {
    return this.books.filter(book => book.author === author);
}

Library.prototype.listAllBooks = function() {
    this.books.forEach(book => {
        console.log(`Название: ${book.title}, Автор: ${book.author}, Количество страниц: ${book.pages}`);
    });
}


class LibraryUser {
    constructor(name) {
        this.name = name;
        this.borrowBooks = [];
    }
}

LibraryUser.prototype.borrowBook = function(book) {
    if (this.borrowBooks.length < 3) {
        this.borrowBooks.push(book);
        console.log(`Пользователь ${this.name} взял книгу "${book.title}"`);
    } else {
        console.log('Количество взятых книг превышает 3');
    }
}

LibraryUser.prototype.returnBook = function(book) {
    const index = this.borrowBooks.indexOf(book);
    if (index > -1) {
        this.borrowBooks.splice(index, 1);
        console.log(`Пользователь ${this.name} вернул книгу "${book.title}"`);
    } else {
        console.log('Этой книги нет в списке взятых пользователем.');
    }
}

let book1 = new Book('Книга А', 'Автор А', 500);
let book2 = new Book('Книга Б', 'Автор Б', 300);
let book3 = new Book('Книга В', 'Автор В', 250);
let book4 = new Book('Книга Г', 'Автор Г', 400);

let library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

library.listAllBooks();

let user = new LibraryUser('Иван');

user.borrowBook(book1);
user.borrowBook(book2);
user.borrowBook(book3);

user.borrowBook(book4);

user.returnBook(book1);

user.returnBook(book4);
