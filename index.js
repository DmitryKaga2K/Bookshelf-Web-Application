class Book {                                              //define a book class with a constructor in order to set up the parameters for the rest of the code
  constructor(title, language, subject, author) { 
    this.title = title;
    this.language = language;
    this.subject = subject;
    this.author = author;
  }

  render() {                                                  //create a seperate element for the book title, language, subject, and author
    const bookContainer = document.createElement("div");      //set inner text of each element to the title, , language, subject, and author property
    bookContainer.classList.add("book");                      // append elements

    const title = document.createElement("h2");
    title.innerText = this.title;
    bookContainer.appendChild(title);

    const language = document.createElement("p");
    language.innerText = `Language: ${this.language.toUpperCase()}`;
    bookContainer.appendChild(language);

    const subject = document.createElement("p");
    subject.innerText = `Subject: ${this.subject}`;
    subject.classList.add("subject");
    bookContainer.appendChild(subject);

    const author = document.createElement("p");                         
    author.innerText = `Author: ${this.author}`;
    bookContainer.appendChild(author);

    return bookContainer;
  }
}

class Bookshelf {                              
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);                      //Push the book object to the array
  }

  render() {                                                          //create a render method to execute the function of creating and returning contrainer for the bookshelf
    const bookshelfContainer = document.createElement("div");         //create div for bookshelf element
    const booksList = document.createElement("ul");                   //add bookshelf class
    this.books.forEach(function(book) {                               //create unordered list
      bookshelfContainer.classList.add("bookshelf");                  //create list item element for each book 

      const bookItem = document.createElement("li");        
      bookItem.appendChild(book.render());
      booksList.appendChild(bookItem);
    });

    bookshelfContainer.appendChild(booksList);

    return bookshelfContainer;
  }
}

const bookshelf = new Bookshelf();

for (let i = 0; i < bookData.length; i++) {    //loop that creates new book for each element to pass through 
  const book = new Book(
    bookData[i].title,
    bookData[i].language,
    bookData[i].subject,
    bookData[i].author,
  );
  bookshelf.addBook(book);
}

document.body.appendChild(bookshelf.render());