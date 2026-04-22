import HeroSection from "../../Components/HomeComp/HeroSection";
import { useBooks } from "../../Context/BookContext";

const Home = () => {
  const { books, currentBook, loading, error } = useBooks();
  console.log(books);

  return (
    <div>
      <HeroSection />
      {/*----------------All Books-----------------*/}
      <div className="">
        <h1>All Books: {books.length} </h1>
      </div>
    </div>
  );
};

export default Home;
