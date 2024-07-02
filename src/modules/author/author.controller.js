import { Author } from "../../../db/models/author.model.js"

export const addauthor = async (req, res, next) => {
    try {
        const { name, bio,birthdate,books } = req.body

        const author = await Author.create({ name, bio,birthdate,books })
        if (author) {
            return res.status(200).json({ message: "author added successfully" })
        }
        throw Error("author not added")
        
    } catch (err) {
        return res.status(err.cause||500).json({message:err.message})
        
    }

}



export const retriveallauthors = async (req, res, next) => {

    try {

        const authors = await Author.find()
        if (authors) {
            return res.status(200).json({ data: authors, success: true })
        }
        throw Error("authors not found")
    } catch (err) {
        return res.status(err.cause || 500).json({ message: err.message })
    }
}


export const get_author_by_id = async (req,res,next) => {
    try {
            const {authorid} = req.params
    const author = await Author.findById(authorid).populate('books');
    if (author) {
        return res.status(200).json({ data: author, success: true })
    }
    throw Error("id not found")
    } catch (err) {
        return res.status(err.cause || 500).json({ message: err.message })
        
    }

}




export const update_author_by_id = async (req, res, next) => {

    try {
        const { authorid } = req.params
   
            const { name, bio,birthdate,books }= req.body
           const authorupdate=  await Author.findByIdAndUpdate(authorid, { name, bio,birthdate,books }, { new: true })
           if(authorupdate){
            return res.status(200).json({ data: authorupdate, success: true })

           }
        
        throw Error("id not found")
    } catch (err) {
        return res.status(err.cause || 500).json({ message: err.message })
    }
}





export const delete_author_by_id = async (req, res, next) => {

    try {
        const { authorid } = req.params
   
           const authordelete=  await Author.findByIdAndDelete(authorid)
           if(authordelete){
            return res.status(200).json({message:"author deleted", success: true })
           }
        
        throw Error("id not found")
    } catch (err) {
        return res.status(err.cause || 500).json({ message: err.message })
    }
}

