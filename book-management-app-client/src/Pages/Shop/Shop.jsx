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

  const handleDeleteBook = () => {
    console.log("Delete books")
  }

  return (
    <div>
      <div className="py-8 md:px-4 container mx-auto">
        {/*--------Result Summary----------*/}
        <div className="my-8">
          Showing { pagination.totalBooks > 0 ? (pagination.currentPage - 1) * filters.limit + 1 : 0 } - <span> {Math.min(pagination.currentPage * filters.limit, pagination.totalBooks)}</span> fo  Books
        </div>
        <BookGrid books={books} loading={loading} error={error} onDeleteBook={handleDeleteBook} />
      </div>
    </div>
  )
}

export default Shop
