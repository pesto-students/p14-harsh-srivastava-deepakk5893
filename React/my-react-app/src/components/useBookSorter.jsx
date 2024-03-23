import { useState, useEffect } from 'react';

const useBookSorter = (books) => {
  const [sortedBooks, setSortedBooks] = useState([]);

  useEffect(() => {
    const sorted = [...books]
    setSortedBooks(sorted);
  }, [books]);

  const sortBooks = () => {
    const sorted = [...books].sort((a, b) => a.title.localeCompare(b.title));
    setSortedBooks(sorted);
  };

  return [sortedBooks, sortBooks];
};

export default useBookSorter;