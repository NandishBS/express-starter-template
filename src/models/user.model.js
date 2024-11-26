//continue if required or delete user.model.js and create new files
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    //create schema here


},{timestamps:true})

export const User = mongoose.model("User", userSchema)