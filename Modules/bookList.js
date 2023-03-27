import Book from '/Modules/book.js';

export default class BookList {
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
