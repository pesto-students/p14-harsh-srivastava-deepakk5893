import React, { useState } from 'react';

const BookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if all fields are filled
    if (!title || !author || !year) {
      alert('Please fill in all fields');
      return;
    }
    // Create a new book object
    const newBook = {
      title: title,
      author: author,
      year: year
    };
    // Call the onAddBook function with the new book object
    onAddBook(newBook);
    // Clear the input fields
    setTitle('');
    setAuthor('');
    setYear('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <label>Author:</label>
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
      <label>Year:</label>
      <input type="number" value={year} onChange={(e) => setYear(e.target.value)}/>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;