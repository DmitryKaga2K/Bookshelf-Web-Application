class Bookshelf {                              
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);                      //Push the book object to the array
    }
  
    render() {                                                          //create a render method to execute the function of creating and returning container for the bookshelf
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
  