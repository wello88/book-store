import express from "express"
import { connectdb } from "./db/connection.js"
import BookRouter from "./src/modules/book/book.router.js"
import authorRouter from "./src/modules/author/author.router.js"

const app = express()

const port = 3000
app.use(express.json())
app.use('/',BookRouter)
app.use('/',authorRouter)


app.listen(port,()=>{
    console.log("server is runing on port",port)
})