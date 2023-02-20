const bookshelf = new Bookshelf();

for (let i = 0; i < bookData.length; i++) {                       //loop that creates new book for each element to pass through

  const book = new Book(
    bookData[i].title,
    bookData[i].language,
    bookData[i].subject,
    bookData[i].author
  );
  bookshelf.addBook(book);
}

document.getElementById("bookshelf-container").appendChild(bookshelf.render());

function addNewBook() {                                           //create a new book fucntion which allows website visitor to add book 
  const title = prompt("Enter title");                            //add categories title, language, subject, and author the 4 classes which are already listed on the books on the page
  const language = prompt("Enter language");                      //render it on the page
  const subject = prompt("Enter subject");
  const author = prompt("Enter author");

  const book = new Book(title, language, subject, author);
  bookshelf.addBook(book);

  const bookshelfContainer = document.getElementById("bookshelf-container");
  bookshelfContainer.innerHTML = "";
  bookshelfContainer.appendChild(bookshelf.render());
}                                       