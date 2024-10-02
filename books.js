
let books = []

const addBook = (title, author, genre) => {
    books.push({
        title: title,
        author: author,
        genre: genre,
        finished: false,
    })
    console.log(`Книга "${title}" добавлена`)
}

const deleteBook = (index) => {
    if (books[index]) {
        books.splice(index, 1)
        console.log(`Книга "${books[index].title}" удалена`)
    } else {
        console.log(`Книга не найдена`)
    }
}

const updateBookStatus = (index) => {
    if (books[index]) {
        books[index].finished = !books[index].finished
        console.log(`Книга "${books[index].title}" обновлена`)
    } else {
        console.log(`Книга не найдена`)
    }
}

const displayBooks = () => {
    console.log(`Список книг: `)
    books.forEach((books, index) => {
        console.log(`${index + 1} ${books.title} ${books.author} ${books.genre}`)
    })
}

const manageBooks = (action, titleOrIndex = null) => {
    switch(action) {
        case 'add':
            if (titleOrIndex) {
                addBook(titleOrIndex)
            } else {
                console.log(`Необходимо ввести какие-то данные`)
            } break;
        case 'delete':
            if (titleOrIndex = !null) {
                deleteBook(titleOrIndex)
            } else {
                console.log(`Необходимо указать индекс элемента удаления`)
            } break;
        case 'list' :
            displayBooks();
            break;
        default:
            console.log(`Неизвестная команда`)
    }
}