// #region Book Render/Remove Functions
// eslint-disable-next-line max-classes-per-file
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

  render() {
    this.booksContainer.innerHTML = '';
    this.bookList.renderBooks((book, removeBookFn) => {
      const bookInstance = this.bookTemplate.content.cloneNode(true);
      bookInstance.querySelector('h4').textContent = book.title;
      bookInstance.querySelector('p').textContent = book.author;
      bookInstance.querySelector('.removeButton').addEventListener('click', () => {
        removeBookFn();
        this.render();
      });
      this.booksContainer.appendChild(bookInstance);
    });
  }
}

const bookList = new BookList();
const booksListUI = new BooksListUI(bookList);

document.getElementById('addBookButton').addEventListener('click', () => {
  const bookTitle = document.getElementById('bookTitle').value;
  const authorName = document.getElementById('bookAuthor').value;
  const newBook = new Book(bookTitle, authorName);
  bookList.addBook(newBook);
  booksListUI.render();
});

booksListUI.render();
// #endregion
// #region Hide and Show other pages
const menu = document.getElementById('navLinks');
const menuLinks = menu.children;
const contentSections = document.querySelectorAll('contentSection');

for (let i = 0; i < menuLinks.length; i += 1) {
  // We add an event listener to each menu link
  menuLinks[i].addEventListener('click', () => {
    // We get the text of the link (name) to use it as parameter
    const textValue = menuLinks[i].textContent;
    // we need to make the textValue without spaces and make it lowercase
    const noSpacesString = textValue.replace(/\s+/g, "").toLowerCase();
    const container = document.getElementById(noSpacesString);
    // If the cliked is the one showing we do nothing
    if (!container.classList.contains('hidden')) {
      return;
    }
    // else, we hide it
    else {
      container.classList.toggle('hidden');
    }
    // We get all the containers in the body
    const allContainers = document.querySelectorAll('.contentSection');
    // We only show the one that doesn't have 'hidden' class
    allContainers.forEach((c) => {
      if (c !== container && !c.classList.contains('hidden')) {
        c.classList.toggle('hidden');
      }
    });
  });
};
// #region 
// #region Update Date and Time 
function displayLiveDate() {
  const liveDateElement = document.querySelector('.live-date');
  const now = new Date();
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(now);
  liveDateElement.textContent = formattedDate;
}
displayLiveDate(); 
// need a function that calls DisplayLiveDate() every minute
setInterval(displayLiveDate, 30000);
// #region

