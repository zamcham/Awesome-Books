import Book from './book.js';
import BookList from './bookList.js';
import BooksListUI from './booksListUI.js';
import setupMenu from './menu.js';
import { DateTime } from "../node_modules/luxon/build/es6/luxon.js";

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

function updateLiveDate() {
  const liveDate = document.querySelector('.live-date');
  const timeNow = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);

  liveDate.textContent = timeNow;
}

setInterval(updateLiveDate, 1000);