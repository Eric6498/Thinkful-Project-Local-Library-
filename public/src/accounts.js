
function findAccountById(accounts, id) {
  return foundAccount = accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return sortAccounts = accounts.sort((accounts1, accounts2) => 
  accounts1.name.last.toLowerCase() > accounts2.name.last.toLowerCase() ? 1 : -1)
};


function getTotalNumberOfBorrows(account, books) {
  var numBookBorrow = 0;
  for (book in books) {
    const booksBorrowed = books[book].borrows;
    for (borrow in booksBorrowed) {
      if (account.id === booksBorrowed[borrow].id) {
        numBookBorrow++;
      }
    }
  }
  return numBookBorrow;
}


function getBooksPossessedByAccount(account, books, authors) {
  let bookChecked = books.filter(({borrows}) => (borrows[0].id === account.id && !borrows[0].returned)).map((book) => { 
    const author = authors.find((name) => name.id === book.authorId);
    return {...book, author};
  })
  return bookChecked;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
