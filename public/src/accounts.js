function findAccountById(accounts, id) {
   //returns the account object that has the matching ID
const result = accounts.find((account) => account.id ===id);
   return result;
}

function sortAccountsByLastName(accounts) {
  // returns an array of the account objects sorted alphabetically by last name
 return accounts.sort((first, second) =>{
  if(first.name.last > second.name.last){
    return 1;
  } else if(second.name.last > first.name.last) {
  return -1;
} else {
  return 0;
}
  });
}

function getAccountFullNames(accounts) {
   // returns an array of strings with the full name of account in original order of the account objects
  const fullNames = accounts.map(function(account) {
    return`${account.name.first} ${account.name.last}`;
  });
 return fullNames;
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
