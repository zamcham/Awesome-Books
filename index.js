import Book from '/Modules/book.js';
import BookList from '/Modules/bookList.js';
import BooksListUI from '/Modules/booksListUI.js';
import setupMenu from './Modules/menu.js';

const bookList = new BookList();
const booksListUI = new BooksListUI(bookList);

document.getElementById('addBookButton').addEventListener('click', (event) => {
  event.preventDefault();

  const bookTitleInput = document.getElementById('bookTitle');
  const authorNameInput = document.getElementById('bookAuthor');
  const bookTitle = document.getElementById('bookTitle').value;
  const authorName = document.getElementById('bookAuthor').value;
  const newBook = new Book(bookTitle, authorName);
  bookList.addBook(newBook);
  booksListUI.render();
  // Clear the input fields after adding the book
  bookTitleInput.value = '';
  authorNameInput.value = '';
});

booksListUI.render();

// Call the setupMenu function to initialize the menu
setupMenu();
