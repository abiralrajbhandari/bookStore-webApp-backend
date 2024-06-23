//routes define garna express lai import garne
//getBook fun lai ni import garne
//model-->controller-->routes
//creating express router
//get request garne to fuction using router
//"/" yo url ma get req garda function-->getBook() run hoss

import express from "express";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);//created API of get req --test them in postman

export default router;


