class Book {                                                       //define a book class with a constructor in order to set up the parameters for the rest of the code
constructor(title, language, subject, author, comment) {       
  this.title = title;
  this.language = language;
  this.subject = subject;
  this.author = author;
  if (comment) {                              //comment property of the book set to empty unless arugment is provided then comments property is included to an array with the comment
    this.comments = [comment];
  } else {
    this.comments = [];
  }
  this.commentsSection = document.createElement("div");       //create the comments section here
}

addComment(comment) {
  this.comments.push(comment);
  const commentElement = document.createElement("p");
  commentElement.innerText = comment;
  this.commentsSection.appendChild(commentElement);       //comment is appended comments section in the book
}

render() {                                                  //create a seperate element for the book title, language, subject, author and comment
  
  this.commentsSection.innerHTML="";                        //clears comment section when new book is rendered so comment isn't repeated each time new book is rendered
  
  const bookContainer = document.createElement("div");      //set inner text of each element to the title, language, subject, author and comment property
  bookContainer.classList.add("book");                      //append elements

  const title = document.createElement("h5");               // add box for text input limit comment to 280 words
  title.innerText = this.title;                             // add text area and button for commentor to click with message of 'Enter comment!
  bookContainer.appendChild(title);                         // add event listner for the click event when commenting

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

  bookContainer.appendChild(this.commentsSection);

  const commentBox = document.createElement("div");
  const commentForm = document.createElement("form")
  const commentText = document.createElement ("textarea")
  commentText.setAttribute ("maxlength", "280");
  const commentButton = document.createElement("button");
  commentButton.innerText = "Enter comment!";
  commentButton.type = "submit";
  commentBox.appendChild(commentText);
  commentBox.appendChild(commentButton);

  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();                     //stops the page from auto refreshing when comment is inputed before this comment would instantly be deleted
    const commentTextValue = commentText.value;
    if (commentTextValue.length > 0) {
      this.addComment(commentTextValue); 
      commentText.value = "";
    }
  });

  commentForm.appendChild(commentBox);          //append comment box to form
  bookContainer.appendChild(commentForm);        //append form to book container

  this.comments.forEach((commentText) => {
    this.addComment(commentText);
  });

  return bookContainer;
}
}