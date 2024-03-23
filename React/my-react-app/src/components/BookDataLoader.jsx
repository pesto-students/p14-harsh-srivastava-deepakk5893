import { useEffect } from 'react';

const BookDataLoader = ({ setBooks }) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await fetch('https://api.example.com/books');
                // const data = await response.json();
                setBooks([
                    { title: 'Book_1', author: 'Author_1', year: 2020 },
                    { title: 'Book_3', author: 'Author_3', year: 2022 },
                    { title: 'Book_2', author: 'Author_2', year: 2018 },
                ]);
            } catch (error) {
                console.error('Error fetching book data:', error);
            }
        };

        fetchData();
    }, [setBooks]);

    return null;
};

export default BookDataLoader;