//ELEMENTS

const addBookButton = document.querySelector('div#content button');
const contentForm = document.querySelector('div#contentForm');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const isRead = document.querySelector('#isRead');
const form = document.querySelector('#form');
const cards = document.querySelector('.cards');

//CLASSES

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

  getBook = () => new Book(title.value, author.value, pages.value, isRead.checked);

  removeBook = (bookTitle) => {
    this.books.forEach((book) => {
      if(book.title === bookTitle) {
        this.books.splice(this.books.indexOf(book), 1);
      }
    })
  }

  showLibrary = (library) => {
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
        book.isRead = !book.isRead;
        ls.saveLibraryToLocalStorage(library);
        console.log(book.isRead);
      });
      removeBookButton.addEventListener('click', () => {
        library.removeBook(book.title)
        ls.saveLibraryToLocalStorage(library);
      });
    })
  }
}

class LocalStorage {

  saveLibraryToLocalStorage = (library) => {
    localStorage.setItem('library', JSON.stringify(library.books));
    window.location = window.location;
  }
  
  loadLibraryFromLocalStorage = () => {
    if(localStorage.getItem('library') === null) {
      library.books = [];
    } else {
      library.books = [...JSON.parse(localStorage.getItem('library'))];
    }
  };
}

//EVENT LISTENERS

addBookButton.addEventListener('click', () => {
  contentForm.style.zIndex = 1;
  contentForm.style.visibility = 'visible';
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  library.addBook(library.getBook());
  ls.saveLibraryToLocalStorage(library);
  form.reset();
  () => {
    contentForm.style.zIndex = -1;
    contentForm.style.visibility = 'hidden';
  }
})

//RENDER BOOKS

const library = new Library();
const ls = new LocalStorage(library);
ls.loadLibraryFromLocalStorage();
library.showLibrary(library);


