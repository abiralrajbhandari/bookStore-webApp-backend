import mongoose from "mongoose";

//schema-->class provided by mongoose used to define str of data
//book-->name of model
// creating model of the above schema, model-->collection of data

const bookSchema = mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  title: String,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
