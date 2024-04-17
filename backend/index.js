import express, { urlencoded } from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json());
app.use(urlencoded({ extended: true }));


app.use("/books", booksRoute);
//Database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/BookStore")

  .then(() => {
    app.listen(5555, () => {
      console.log("Server is running on http://localhost:5555");
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });
