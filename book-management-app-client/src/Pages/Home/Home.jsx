import HeroSection from "../../Components/HomeComp/HeroSection";
import { useBooks } from "../../Context/BookContext";

const Home = () => {
  const { books, currentBook, loading, error } = useBooks();
  console.log(books);

  return (
    <div>
      <HeroSection />
      {/*----------------All Books-----------------*/}
      <div className="container mx-auto">
       {books.length > 0 ? <div >
        {books.map((book, _id) => (
          <div key={book._id}>
          <h1>{book.title}</h1>
        </div>))}
       </div> : "Book Not Found"}
      </div>
    </div>
  );
};

export default Home;
 