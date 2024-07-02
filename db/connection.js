import mongoose from "mongoose";

export const connectdb = mongoose.connect('mongodb://localhost:27017/book-store').then(() => {
    console.log('connected to db')
    

}

).catch((err) => console.log(err))
