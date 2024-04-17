import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    title:String,
    author:String,
    publishYear:Number,
})
export const Book = mongoose.model('Book', BookSchema);