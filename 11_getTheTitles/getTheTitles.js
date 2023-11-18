const getTheTitles = function(books=[]) {
    const newbooks = books.map(book => book['title']);
    return newbooks;
};

// Do not edit below this line
module.exports = getTheTitles;
