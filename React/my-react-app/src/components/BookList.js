import Book from './Book';
import React, { Component } from 'react';
import WithLogging from './WithLogging';

class BookList extends Component {
  render() {
    const books = [
      { title: 'Book 1', author: 'Author 1', year: 2020 },
      { title: 'Book 2', author: 'Author 2', year: 2018 },
      { title: 'Book 3', author: 'Author 3', year: 2022 },
    ];
    // const books = this.props.books;
    return (
      <div>
        <h2>Book List</h2>
        <ul>
          {books.map((book, index) => (
            <Book key={index} title={book.title} author={book.author} year={book.year} />
          ))}
        </ul>
      </div>
    );
  }
}

export default WithLogging(BookList);