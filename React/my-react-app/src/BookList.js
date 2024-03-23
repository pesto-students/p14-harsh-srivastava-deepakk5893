import React from 'react';
import Book from './Book';

const BookList = () => {
  const books = [
    { title: 'Book 1', author: 'Author 1', year: 2020 },
    { title: 'Book 2', author: 'Author 2', year: 2018 },
    { title: 'Book 3', author: 'Author 3', year: 2022 },
  ];

  return (
    <div>
      <h2>Book List</h2>
      {books.map((book, index) => (
        <Book key={index} title={book.title} author={book.author} year={book.year} />
      ))}
    </div>
  );
};

export default BookList;