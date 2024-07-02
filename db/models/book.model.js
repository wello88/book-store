import {Schema, model} from 'mongoose'


const bookSchema = new Schema({

    title:{
        type:String,
        required:true  
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    publishdate:{
        type:Date,
        default:Date.now
    }




})

export const Book = model('Book',bookSchema)