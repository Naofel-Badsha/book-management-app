import axios from "axios";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //----------To banckend----------
  const [filter, setFilter] = useState({
    page: 1,
    limit: 8,
    genre: '',
    minYear: '',
    maxYear: '',
    author: '',
    minPrice: '',
    maxPrice: '',
    sortBy: 'title',
    order: 'asc',
    search: ''
  })

  //------------Pagination------------
  const [pagination, setPagination] = useState({
    totalBooks: 0,
    currentPage: 1,
    totalPages: 1
  })


  const fetchBooks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams();
      Object.entries(filter).forEach(([key, value]) => {
        if (value !== '') {
          params.append(key, value)
        }
      })

      const response = await axios.get("http://localhost:3000/books");
      setBooks(response.data.books);
    } catch (error) {
      console.log(error);
    }
  })




  useEffect(() => {
    fetchBooks();
  }, []);



  const value = {
    books,
    currentBook,
    loading,
    error,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

export const useBooks = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBooks must be withings a Book Provider");
  }
  return context;
};
