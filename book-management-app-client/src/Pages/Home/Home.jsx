import HeroSection from "../../Components/HomeComp/HeroSection";
import { useBooks } from "../../Context/BookContext";
import Shop from "../Shop/Shop";


const Home = () => {
  const { books, currentBook, loading, error } = useBooks();
  console.log(books);

  return (
    <div>
      <HeroSection />
      <Shop /> 
      {/*----------------All Books-----------------*/}
    </div>
  );
};

export default Home;
 