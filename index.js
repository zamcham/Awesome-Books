class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookList {
  constructor() {
    this.booksInfo = JSON.parse(localStorage.getItem('books') || '[]');
  }

  renderBooks(renderFn) {
    this.booksInfo.forEach((book, index) => {
      renderFn(book, () => {
        this.removeBook(index);
      });
    });
  }
  removeBook(index) {
    this.booksInfo.splice(index, 1);
    this.updateStorage();
  }

  addBook(book) {
    this.booksInfo.push(book);
    this.updateStorage();
  }

  updateStorage() {
    localStorage.setItem('books', JSON.stringify(this.booksInfo));
  }
}

class BooksListUI {
  constructor(bookList) {
    this.bookList = bookList;
    this.bookTemplate = document.getElementById('bookInfoTemplate');
    this.booksContainer = document.querySelector('.booksContainer');
  }

