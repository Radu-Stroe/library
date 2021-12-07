let myLybrary = [];

class Book {
  constructor(title = 'Unknown', author = 'Unknown', pages = 0, isRead = 'false') {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

// class Library {
//   constructor(books = []) {
//     this.books = books;
//   }

//   addBookToLibrary = (book) => {
//     this.books.push(book);
//   }
// }

// const library = new Library();

//ELEMENTS

const addBookButton = document.querySelector('div#content button');
const contentForm = document.querySelector('div#contentForm');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const isRead = document.querySelector('#isRead');
const form = document.querySelector('#form');

//FUNCTIONS

const showHideForm = (zIndex = 1, visibility = 'visible') => {
  contentForm.style.zIndex = zIndex;
  contentForm.style.visibility = visibility;
}

const addBookToLibrary = (book) => myLybrary.push(book);
const removeBookFromLibrary = (bookTitle) => {
  myLybrary.forEach((book) => {
    if(book.title === bookTitle) {
      myLybrary.splice(myLybrary.indexOf(book), 1);
    }
  })
}
const getBook = () => new Book(title.value, author.value, pages.value, isRead.checked);

//EVENT LISTENERS

addBookButton.addEventListener('click', () => showHideForm());
form.addEventListener('submit', function(event) {
  event.preventDefault();
  addBookToLibrary(getBook());
  form.reset();
  showHideForm(-1, 'hidden');
})

//RENDER BOOKS


console.log(myLybrary);


// form.addEventListener("submit", function(e) {
//     const data = Object.fromEntries(new FormData(form).entries());
//     console.log(data);
// })



// function submitForm(formElement) {
//     const formData = new FormData(formElement);
//     const allEntries = [...formData.entries()]
//       .reduce((all, entry) => {
//         all[entry[0]] = entry[1]
//         return all
//       }, {})
//     console.log(allEntries);
//     return false;
// }

// onsubmit="return submitForm(this)"   Used on form Element(html)

















































// addBookButton.addEventListener("click", function() {
//   contentForm.style.zIndex = 1;
//   contentForm.style.visibility = "visible";
// })

// const getBookFromInput = () => {
//   const title = document.getElementById('title').value
//   const author = document.getElementById('author').value
//   const pages = document.getElementById('pages').value
//   const isRead = document.getElementById('isRead').checked
//   return new Book(title, author, pages, isRead)
// }

// const addBook = (e) => {
//   console.log('boon');
//   e.preventDefault();
//   const newBook = getBookFromInput();
//   library.addBook(newBook);
//   saveLocal();
//   contentForm.style.zIndex = -1;
//   contentForm.style.visibility = "hidden";
// }

// form.onsubmit = addBook;


// const saveLocal = () => {
//   localStorage.setItem('library', JSON.stringify(library.books))
// }

// const restoreLocal = () => {
//   const books = JSON.parse(localStorage.getItem('library'))
//   if (books) {
//     library.books = books.map((book) => JSONToBook(book))
//   } else {
//     library.books = []
//   }
// }

// const JSONToBook = (book) => {
//   return new Book(book.title, book.author, book.pages, book.isRead)
// }

// restoreLocal();
// console.log(library.books)

