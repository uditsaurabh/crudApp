const Book = require("../models/Book.model");
const mongoose = require("mongoose");

async function AddBook(data) {
  try {
    const savedbook = new Book(data);
    const result = await savedbook.save();
    console.log("the result is", result);
    return result;
  } catch (err) {
    throw err;
  }
}

async function FetchBook() {
  try {
    const result = await Book.find({});
    return result;
  } catch (err) {
    throw err;
  }
}

async function UpdateBook(data) {
  try {
    let book = await Book.findOne({ _id: data._id });

    book.Author = data.Author;
    book.Price = data.Price;
    book.Published_Date = data.Published_Date;
    book.BookName = data.BookName;
    book = await book.save();
    return book;
  } catch (err) {
    throw err;
  }
}

async function DeleteBook(data) {
  try {
    const book = await Book.deleteOne({
      _id: mongoose.Types.ObjectId(data),
    });
    return book;
  } catch (err) {
    throw err;
  }
}

module.exports.AddBook = AddBook;
module.exports.FetchBook = FetchBook;
module.exports.DeleteBook = DeleteBook;
module.exports.UpdateBook = UpdateBook;
