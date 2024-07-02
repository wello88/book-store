import { Schema, model } from "mongoose";

export const authorSchema = new Schema({

name:{
    type:String,
    required:true,
},
bio:String,
birthdate:Date,
books:[{
    type:Schema.Types.ObjectId,
    ref:'Book'
}]

})

export const Author = model('Author',authorSchema)