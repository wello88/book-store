import { Router } from "express";
import { addbook, delete_book_by_id, retriveallbooks, retriveallbooks_byid, update_book_by_id } from "./book.controller.js";

const BookRouter=Router()

BookRouter.post('/addbook',addbook)
BookRouter.get('/getallbooks',retriveallbooks)
BookRouter.get('/get_book_byId/:bookid',retriveallbooks_byid)
BookRouter.patch('/update_book_by_id/:bookid',update_book_by_id)
BookRouter.delete('/delete_book_by_id/:bookid',delete_book_by_id)


export default BookRouter