import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};

/* model(book).find-->model ma data find garirako
data payesi res send garne 
data json form ma send garne */

/*data base sanga communicate garda 
-->data mangauda/pathauda time consuming huncha function lai async banaune*/
//await use cause-->async ops sync way ma garna lai
//jaba samma data audaina taba samma function ko execution pause hoss

/* models finds data--import data--send response(data)
--router takes data response and routes to urls
--index.js stores data in a variablle from routes "/" and defines them i.e "/course" */
