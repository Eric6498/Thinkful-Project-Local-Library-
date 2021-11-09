function getTotalBooksCount(books) {
  return books.length
};

function getTotalAccountsCount(accounts) {
  return accounts.length
};

function getBooksBorrowedCount(books) {
  const checkedOut = books.filter((book) => !book.borrows[0].returned);
  return checkedOut.length;
}


function sortList(bookArr) {
  let result = bookArr
  .sort((countA, countB) => (countA.count < countB.count ? 1 : -1))
  .slice(0,5);
  return result
};

function getMostCommonGenres(books) {
  const comGen = books.reduce((acc, book) => {
    if (!acc[book.genre]) {
      acc[book.genre] = 1;
    } else {
      acc[book.genre] = acc[book.genre] + 1;      
    }
    return acc;
  }, {});
    return Object.keys(comGen).reduce((acc, genre) =>{
      acc.push({ name: genre, count: comGen[genre] });
      return sortList(acc);
    }, []);
  }


function getMostPopularBooks(books) {
  const popList = books.map((book) => {
    return { name: book.title, count: book.borrows.length };});
    return sortList(popList);
  }



function getMostPopularAuthors(books, authors) {
  let authorArr = [];
  authors.forEach((author) => {
    const authorObj = {};
    authorObj.name = `${author.name.first} ${author.name.last}`;
    authorObj.count = 0; 
    const authorBooks = books.filter(({ authorId }) => authorId === author.id);
    authorBooks.forEach((authBook) => {
      authorObj.count += authBook.borrows.length;
    });
    authorArr.push(authorObj);
  });
  return authorArr.sort((auth1, auth2) => auth2.count - auth1.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
