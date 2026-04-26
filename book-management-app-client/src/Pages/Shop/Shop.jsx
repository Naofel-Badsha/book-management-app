import React, { useEffect } from 'react'
import { useBooks } from '../../Context/BookContext'
import BookGrid from '../../Components/CardCom/BookGrid'
import CategoryNav from '../../Components/CardCom/CategoryNav'
import SortBooks from '../../Components/CardCom/SortBooks'

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

  //-------------Sorthing------------
  const handleSortChange = (sortConfig) => {
    updateFilters({
      sortBy: sortConfig.sortBy,
      order: sortConfig.order,
      page: 1
    })
  }

  //--------------handlePagination------------------
  const handlePageChange = (newPage) => {
    updateFilters({ page: newPage });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='container m-auto'>
      <div className="py-12 md:px-4 container mx-auto px-4 min-h-screen">
        <div className="flex items-center justify-between flex-wrap border-b border-gray-200 pb-4">
          <CategoryNav
            categories={categories}
            activeCategory={filters.genre || "All Collections"}
            onCategorChange={handleCategorChange}
          />

          <div className="py-4 flex justify-end px-4">
            <SortBooks
              currentSort={{
                sortBy: filters.sortBy,
                order: filters.order,
              }}
              onSortChange={handleSortChange}
            />
          </div>
        </div>

        {/*--------Result Summary----------*/}
        <div className="py-8 md:px-4">
          Showing {pagination.totalBooks > 0 ? (pagination.currentPage - 1) * filters.limit + 1 : 0} - <span> {Math.min(pagination.currentPage * filters.limit, pagination.totalBooks)}</span> fo  Books
        </div>

        {/*--------Books Card----------*/}
        <BookGrid
          books={books} l
          oading={loading}
          error={error}
          onDeleteBook={handleDeleteBook}
        />
      </div>
      {/*-----------Book Pagination----------*/}
      {pagination.totalPages > 1 && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  )
}

export default Shop
