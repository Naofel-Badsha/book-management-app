import React from 'react'
import { useBooks } from '../../Context/BookContext'
import BookGrid from '../../Components/CardCom/BookGrid'

const Shop = () => {
  const { 
    books,
    currentBook,
    loading,
    error,
    filters,
    pagination,
    fetchBooks,
    updateFilters,
  } = useBooks()
  return (
    <div>
      <div className="py-8 md:px-4">
        <BookGrid books={books} loading={loading} error={error}/>
      </div>
    </div>
  )
}

export default Shop
