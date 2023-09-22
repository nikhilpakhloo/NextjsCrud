import mongoose from "mongoose";

const contactschema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    Phone:{
        type:String,
        required:true,
    },
    Address:{
        type:String,
        required:true,
    }
}, {timestamps:true})


export
const Contacts = mongoose.models.Contacts ||mongoose.model("Contacts",contactschema)

