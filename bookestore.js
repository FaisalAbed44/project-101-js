 // create 2d array to store books
 const books = [
  [1, "Start with why", "Simon Sinek", 80.0, 13],
  [2, "But how do it know", "J. Clark Scott", 59.9, 22],
  [3, "Clean Code", "Robert Cecil Martin", 50.0, 5],
  [4, "Zero to One", "Peter Thiel", 45.0, 12],
  [5, "You don't know JS", "Kyle Simpson", 39.9, 9],
];

// to add new book  
function addBook(book) {
  books.push(book);
}

// method to search book 
 function searchBook(idOrTitle) {
  const book = books.find((book) => book[0] === idOrTitle || book[2] === idOrTitle);
  return book;
}

// method to Selling Book 
function sellBook(bookTitle, quantity, availableBalance) {
  const book = searchBook(bookTitle);

  if (!book || book[3] < quantity) {
    console.log("No Enough quantity");
    return;
  }

  if (availableBalance < book[4] * quantity) {
    console.log("Your Balance is not enough");
    return;
  }

  book[3] -= quantity;

  const totalPrice = book[4] * quantity;
  console.log(`Selling Bill:`);
  console.log(`Book Title: ${book[2]}`);
  console.log(`Quantity: ${quantity}`);
  console.log(`Price: ${book[4]}`);
  console.log(`Total: ${totalPrice}`);
}

// method to show book list
function listBooks() {
  console.log("Book List");
  console.table(books);
}

// this method is the main method
function main() {
// add new book
addBook([7, "C++ Language", "Tomas", 30.9, 13]);

  // search book
  const book = searchBook("C++ Language");
  console.log(book);

  // selling book
  sellBook("C++ Language", 10, 1000);

// diplay the list of books
  listBooks();
}

main();
