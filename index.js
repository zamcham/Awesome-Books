let books = JSON.parse(localStorage.getItem('books') || '[]');
let booksInfo = [
{
    title: 'Trust',
    Author: 'Hernan Diaz'
},
];

// #region generate book section
function removeBook() { // eslint-disable-line no-unused-vars
    console.log('Hello, i should remove the book');
};

// Get the books card template from the DOM
const bookTemplate = document.getElementById('bookInfoTemplate');

// Get the container where the books info will be inserted
const booksContainer = document.querySelector('.booksContainer');

// Loop through the bookList array and generate the HTML for each book
for (let i = 0; i < booksInfo.length; i += 1) {
  // Clone the book template
  const bookInstance = bookTemplate.content.cloneNode(true);

  // Fill in the details for the project
  const book = booksInfo[i];
  bookInstance.querySelector('h4').textContent = book.title;
  bookInstance.querySelector('p').textContent = book.Author;
  bookInstance.querySelector('.removeButton').addEventListener('click', () => {
    removeBook();
  });

  // Insert the project card into the projects container
  booksContainer.appendChild(bookInstance);
}
// #endregion