import React, { useEffect, useState } from 'react'
import HeroSection from '../../Components/HomeComp/HeroSection'

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then(res => res.json())
      .then(data => setBooks(data.books))
  }, [])



  return (
    <div>
      <HeroSection />
      {/*----------------All Books-----------------*/}
      <div className="">
        <h1>All Books: {books.length}</h1>
      </div>
    </div>
  )
}

export default Home
