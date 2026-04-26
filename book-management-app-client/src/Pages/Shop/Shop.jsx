import React, { useEffect } from 'react'
import { useBooks } from '../../Context/BookContext'
import BookGrid from '../../Components/CardCom/BookGrid'
import CategoryNav from '../../Components/CardCom/CategoryNav'

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

  //-------------Caregories------------
  const categories = ["All Collections", "Fiction", "Adventure", "Romance", "Dystopian", "Historical", "Non-Fiction"]

  useEffect(() => {
    fetchBooks()
  }, [filters, fetchBooks])

  const handleCategorChange = (category) => {
    updateFilters({
      genre: category === "All Collections" ? "" : category,
      page: 1,
    })
  }



  return (
    <div>
      <div className="py-12 md:px-4 container mx-auto px-4 min-h-screen">
        <div className="flex items-center justify-between flex-wrap border-b border-gray-200 pb-4">
          <CategoryNav 
          categories={categories} 
          activeCategory={filters.genre || "All Collections"} 
          onCategorChange={handleCategorChange} />

          
          <div className="">Shoting</div>
        </div>
        {/*--------Result Summary----------*/}
        <div className="my-8">
          Showing {pagination.totalBooks > 0 ? (pagination.currentPage - 1) * filters.limit + 1 : 0} - <span> {Math.min(pagination.currentPage * filters.limit, pagination.totalBooks)}</span> fo  Books
        </div>
        <BookGrid books={books} loading={loading} error={error} onDeleteBook={handleDeleteBook} />
      </div>
    </div>
  )
}

export default Shop
