import React from 'react'
import BookCard from './BookCard'

const BookGrid = ({ books, loading, error, handleDeleteBook }) => {
    if (error) {
        <div>Error: {error}</div>
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {loading ? (
                // Show skeleton loaders matching the number of books
                <div className=' text-gray-500 min-h-[50vh]'>Loading...</div>
            ) : books.length === 0 ? (
                <div className="col-span-full text-center text-gray-500 py-36">
                    No books found in this category.
                </div>
            ) : (
                books.map((book) => (
                    <BookCard key={book._id} book={book} handleDeleteBook={handleDeleteBook} />
                ))
            )}
        </div>
    )
}

export default BookGrid
