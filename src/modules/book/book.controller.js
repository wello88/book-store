import { Book } from "../../../db/models/book.model.js"

export const addbook = async (req, res, next) => {

    try {
        const { title, author, content } = req.body

        const book = await Book.create({ title, author, content })
        if (book) {
            return res.status(200).json({ message: "book added successfully" })
        }
        throw Error("book not added")

    } catch (err) {
        return res.status(err.cause || 500).json({ message: err.message })

    }

}



export const retriveallbooks = async (req, res, next) => {
    try {
        const { page = 1, limit = 10, title, author } = req.query;
        const query = {};
        if (title) query.title = { $regex: title, $options: "i" };
        if (author) query.author = { $regex: author, $options: "i" };

        const books = await Book.find(query).limit(limit * 1).skip((page - 1) * limit).exec();
        const count = await Book.countDocuments(query);

        return res.status(200).json({
            data: books,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            success: true
        });
    } catch (err) {
        return res.status(err.cause || 500).json({ message: err.message });
    }
};




export const retriveallbooks_byid = async (req, res, next) => {

    try {
        const { bookid } = req.params
        const book = await Book.findById(bookid)
        if (book) {
            return res.status(200).json({ data: book, success: true })
        }
        throw Error("id not found")
    } catch (err) {
        return res.status(err.cause || 500).json({ message: err.message })
    }
}






export const update_book_by_id = async (req, res, next) => {

    try {
        const { bookid } = req.params
   
            const { title, author, content } = req.body
           const bookupdated=  await Book.findByIdAndUpdate(bookid, { title, author, content }, { new: true })
           if(bookupdated){
            return res.status(200).json({ data: bookupdated, success: true })

           }
        
        throw Error("id not found")
    } catch (err) {
        return res.status(err.cause || 500).json({ message: err.message })
    }
}





export const delete_book_by_id = async (req, res, next) => {

    try {
        const { bookid } = req.params
   
           const bookdelete=  await Book.findByIdAndDelete(bookid)
           if(bookdelete){
            return res.status(200).json({message:"book deleted", success: true })
           }
        
        throw Error("id not found")
    } catch (err) {
        return res.status(err.cause || 500).json({ message: err.message })
    }
}