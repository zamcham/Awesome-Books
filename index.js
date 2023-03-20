let booksInfo = JSON.parse(localStorage.getItem('books') || '[]');
const bookTemplate = document.getElementById('bookInfoTemplate');
const booksContainer = document.querySelector('.booksContainer');

function renderBooks() {
  booksContainer.innerHTML = '';
  for (let i = 0; i < booksInfo.length; i += 1) {
    const bookInstance = bookTemplate.content.cloneNode(true);
    const book = booksInfo[i];
    bookInstance.querySelector('h4').textContent = book.title;
    bookInstance.querySelector('p').textContent = book.author;
    bookInstance.querySelector('.removeButton').addEventListener('click', () => {
      removeBook(i);
    });
    booksContainer.appendChild(bookInstance);
  }
}

function removeBook(index) {
  booksInfo.splice(index, 1);
  localStorage.setItem('books', JSON.stringify(booksInfo));
  renderBooks();
}

function addBookToList() {
  let bookTitle = document.getElementById("bookTitle").value;
  let authorName = document.getElementById("bookAuthor").value;
  let newBook = {
    title: bookTitle,
    author: authorName,
  };
  booksInfo.push(newBook);
  localStorage.setItem('books', JSON.stringify(booksInfo));
  renderBooks();
}

document.getElementById("addBookButton").addEventListener("click", addBookToList);
renderBooks();