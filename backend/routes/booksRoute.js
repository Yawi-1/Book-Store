import express from "express";
import { Book } from "../models/BookModel.js";
const router = express.Router();

//Routes
//Post the books into database.
router.post("/", async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    // Create a new book document
    const newBook = await Book.create({ title, author, publishYear });
    console.log("New book added:", newBook); // Log the newly created book
    newBook.save();
    res.redirect("/"); // Redirect after successful creation
  } catch (err) {
    console.log("Error in saving book:", err); // Log any errors
    return res.status(500).send(`Error: ${err}`);
  }
});

//Get all books form database.

router.get("/", async (req, res) => {
  const allBooks = await Book.find({}); //Empty array to get all books.
  res.send(allBooks);
});

//Get one book by its id.
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneBook = await Book.findById(id);
  if (!oneBook) {
    return res.status(404).send("No data found with given ID");
  } else {
    res.send(oneBook);
  }
});

//Update a book

router.put("/:id", async (req, res) => {
  if (!req.body.title || !req.body.author || !req.body.publishYear) {
    return res.status(400).send("Missing fields!");
  }
  const { id } = req.params;

  const updateBook = await Book.findByIdAndUpdate(id, req.body);
  if (!updateBook) {
    return res.status(400).send("Invalid book ID.");
  }
  res.send(updateBook);
});

//Delete a book
router.delete("/:id", async (req, res) => {
  try {
    let deletedBook = await Book.findByIdAndDelete(req.params.id);
    res.json(deletedBook);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

export default router;
