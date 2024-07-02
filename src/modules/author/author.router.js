import { Router } from "express";
import { addauthor, delete_author_by_id, get_author_by_id, retriveallauthors, update_author_by_id } from "./author.controller.js";
const authorRouter=Router()

authorRouter.post('/addauthor',addauthor)
authorRouter.get('/getallauthors',retriveallauthors)
authorRouter.get('/get_author_by_id/:authorid',get_author_by_id)
authorRouter.patch('/update_author_by_id/:authorid',update_author_by_id)
authorRouter.delete('/delete_author_by_id/:authorid',delete_author_by_id)

export default authorRouter