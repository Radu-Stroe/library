class Book {
  constructor(title = 'Unknown', author = 'Unknown', pages = 0, isRead = 'false') {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

class Library {
  constructor(books = []) {
    this.books = books;
  }

  addBook = (book) => {
    this.books.push(book);
  }

  removeBook = (bookTitle) => {
    this.books.forEach((book) => {
      if(book.title === bookTitle) {
        myLybrary.splice(myLybrary.indexOf(book), 1);
      }
    })
  }
}

const library = new Library();

//ELEMENTS

const addBookButton = document.querySelector('div#content button');
const contentForm = document.querySelector('div#contentForm');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const isRead = document.querySelector('#isRead');
const form = document.querySelector('#form');
const cards = document.querySelector('.cards');


//FUNCTIONS

const showHideForm = (zIndex = 1, visibility = 'visible') => {
  contentForm.style.zIndex = zIndex;
  contentForm.style.visibility = visibility;
}

const getBook = () => new Book(title.value, author.value, pages.value, isRead.checked);

//LOCAL STORAGE

const saveLibraryToLocalStorage = (library) => {
  localStorage.setItem('library', JSON.stringify(library.books));
  window.location = window.location;
}

const loadLibraryFromLocalStorage = () => {
  if(localStorage.getItem('library') === null) {
    library.books = []
  } else {
    library.books = [...JSON.parse(localStorage.getItem('library'))];
  }
};

//EVENT LISTENERS

addBookButton.addEventListener('click', () => showHideForm());

form.addEventListener('submit', function(event) {
  event.preventDefault();
  library.addBook(getBook());
  saveLibraryToLocalStorage(library);
  form.reset();
  showHideForm(-1, 'hidden');
})

//RENDER BOOKS

loadLibraryFromLocalStorage();

library.books.forEach((book) => {
  const card = document.createElement('div');
  const bookTitle = document.createElement('p');
  const bookAuthor = document.createElement('p');
  const bookPages = document.createElement('p');
  const readBookButton = document.createElement('button');
  const removeBookButton = document.createElement('button');

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookPages.textContent = book.pages;
  removeBookButton.textContent = 'Remove';

  if (book.isRead) {
    readBookButton.textContent = 'Read';
    readBookButton.classList.add('green');
  } else {
    readBookButton.textContent = 'Not Read';
    readBookButton.classList.add('red');
  }

  card.classList.add('card');
  readBookButton.classList.add('read-btn');
  removeBookButton.classList.add('remove-btn');
  
  cards.appendChild(card);
  card.appendChild(bookTitle);
  card.appendChild(bookAuthor);
  card.appendChild(bookPages);
  card.appendChild(readBookButton);
  card.appendChild(removeBookButton);

  readBookButton.addEventListener('click', () => {
    book.isRead = !book.isRead
    console.log(book.isRead)
  });
  removeBookButton.addEventListener('click', () => library.removeBook(book.title));
})


















































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

