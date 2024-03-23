import BookDetail from './BookDetail';
import React, { useState } from 'react';
import WithLogging from './WithLogging';
import BookForm from './BookForm';
import BookDataLoader from './BookDataLoader'
import useBookFilter from './useBookFilter';
import { useTheme } from './ThemeContext';
import useBookSorter from './useBookSorter'

const BookList = () => {
  const { theme } = useTheme();
  const [books, setBooks] = useState([]);
  const { filteredBooks, handleSearchChange } = useBookFilter(books);
  const [sortedBooks, sortBooks] = useBookSorter(filteredBooks);
  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };
  const handleDeleteBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  const handleSortBooks = () => {
    sortBooks();
  };

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#ffffff' : '#333333', color: theme === 'light' ? '#333333' : '#ffffff' }}>
      <h1>Book List</h1>
      <BookDataLoader setBooks={setBooks} />
      <button onClick={handleSortBooks}>Sort Books</button>
      <input
        type="text"
        placeholder="Search books"
        onChange={handleSearchChange}
      />
      {sortedBooks.length === 0 ? (
        <p>No books available. Add some books using the form below:</p>
      ) : (
        <div>
          {sortedBooks.map((book, index) => (
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