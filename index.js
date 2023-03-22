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

const menuLinks = document.querySelectorAll('link');
const contentSections = document.querySelectorAll('contentSection');

for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', () => {
    console.log('event listener added');
  })
}

//we need to know which link/page is clicked to activate it the hidden
//and hide all the other ones


//When you click on the menu, we get the name of the tab as a parameter
// match the parameter to the ID of the sections
// toggle the hidden class on that section
// if already hidden do nothing
// else we toggle the hidden class