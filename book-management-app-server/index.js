const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 3000;

//--------Meddleware-----------
app.use(express.json());
app.use(cors());

//-----Cunnect----Width---MomgoDB---------
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const db = client.db("book-management-app");
    const booksCollection = db.collection("books");

    //-----------Create a new POST----------
    app.post("/books", async (req, res) => {
      const bookData = req.body;
      try {
        const book = await booksCollection.insertOne(bookData);
        res
          .status(201)
          .json({ message: "Added new books successfully!", book });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    // https://localhost:3000/books?page=1&limit=8&sortBy-titlesorder-asc
    //---------Find all books GET----------
    app.get("/books", async (req, res) => {
      const {page, limit, genre, minYear, maxYear, author, minPrice, maxPrice, sortBy, order, search} = req.query
      try {
        //-----------Pagination---------
        const currentPage = Math.max(1, parseInt(page) || 1)
        const perPage = parseInt(limit) || 10;
        const skip = (currentPage - 1) * perPage

       //---------Filters----------
        const filter = {};
        if(search){
          filter.$or = [
            {title: {$regex: search, $options: "i"}},
            {description: {$regex: search, $options: "i"}},
            {author: {$regex: search, $options: "i"}},
          ]
        }

        //--------Category-------
        if(genre) {
          filter.genre = genre
        }

       //----------MinYear and MaxYear------
       if(minYear || maxYear) {
         filter.publishedYear = {
          ...minYear && {$get: parseInt(minYear)},
          ...maxYear && {$lte: parseInt(maxYear)}
         }
       }

       //-------High Price and Low Price ------
       if(minPrice || maxPrice) {
        filter.price = {
          ...minPrice && {$get: parseInt(minPrice)},
          ...maxPrice && {$get: parseInt(maxPrice)}
        }
       }





        const books = await booksCollection.find(filter).toArray();
        res.status(201).json({ message: "Finded All books!", books });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });


    //---------Find single books GET----------
    app.get("/books/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const books = await booksCollection.findOne({ _id: new ObjectId(id) });
        res.status(201).json({ message: "Finded Single book!", books });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });















    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello Book Management App Server!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//book-management-app
//crqJAH8IPVSWiYZG
