import BookDetail from './BookDetail';
import React, { useState } from 'react';
import WithLogging from './WithLogging';
import BookForm from './BookForm';

const BookList = () => {
  const [books, setBooks] = useState([
    { title: 'Book 1', author: 'Author 1', year: 2020 },
    { title: 'Book 2', author: 'Author 2', year: 2018 },
    { title: 'Book 3', author: 'Author 3', year: 2022 }
  ]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <h1>Book List</h1>
      {books.length === 0 ? (
        <p>No books available. Add some books using the form below:</p>
      ) : (
        <div>
          {books.map((book, index) => (
            <div key={index}>
              <BookDetail title={book.title} author={book.author} year={book.year} />
              <button onClick={() => handleDeleteBook(index)}>Delete</button>
            </div>
          ))}
        </div>
      )}
      <BookForm onAddBook={handleAddBook} />
    </div>
  );
};

export default WithLogging(BookList);