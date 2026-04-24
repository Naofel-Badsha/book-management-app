import axios from "axios";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //----------To banckend----------
  const [filters, setFilters] = useState({
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
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== '') {
          params.append(key, value)
        }
      })

      const response = await axios.get("http://localhost:3000/books");
      setBooks(response.data.books);
      setPagination({
        currentPage: response.data.currentPage,
        totalBooks: response.data.totalBooks,
        totalPages: response.data.totalPages
      })

    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [filters])

  //-------Data aser por book k null korere jonno ------
  const clearCurrentBook = useCallback(() => {
    setBooks()
  }, [])


//----------Update filter books-------------
  const updateFilters = useCallback(async (newFilters) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters,
      page: newFilters.hasOwnProperty('page') ? newFilters.page : 1
    }))
  }, [])


  //-----------Single Books Details----------
  const fetchBookDetails = useCallback(async (bookId) => {
    try {
      setLoading(true);
      setError(null)

      const response = await axios.get(`http://localhost:3000/books/${bookId}`)
      setCurrentBook(response.data);
      return response.data
    } catch (error) {
      setError(error.message)
      throw error
    } finally {
      setFilters(false)
    }
  }, [])

  useEffect(() => {
    fetchBooks();
  }, [filters]);



  const value = {
    books,
    currentBook,
    loading,
    error,
    filters,
    pagination,
    fetchBooks,
    updateFilters,
    fetchBookDetails
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
