import { useState, useMemo } from 'react';

// Custom hook for filtering books based on search term
const useBookFilter = (books) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Memoize the filtered book list to optimize performance
  const filteredBooks = useMemo(() => {
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [books, searchTerm]);

  // Function to update the search term
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Return the filtered books and the search term change handler
  return { filteredBooks, handleSearchChange };
};

export default useBookFilter;