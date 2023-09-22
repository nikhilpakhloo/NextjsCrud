import mongoose from "mongoose"
export const connect = async()=>{
    try {
        await mongoose.connect(process.env.Mongo_db)
    } catch (error) {
        throw new Error(error.message)
        
    }
}