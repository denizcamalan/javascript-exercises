const getTheTitles = function(books) {
    books = [
        {
          title: 'Book',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
        }
      ];
      return books.map(({title}) => title);
};

// Do not edit below this line
module.exports = getTheTitles;
