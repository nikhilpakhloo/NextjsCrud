import axios from "axios"

export const addData= async(data)=>{
    try {
        const newdata = await axios.post('/api/contacts', data)
        return newdata
        
    } catch (error) {
        throw new Error(error.message)
        
    }
}
export  const getData = async()=>{
    try {
        const getContacts = await axios.get("/api/contacts")
        return getContacts
    } catch (error) {
        throw new Error (error.message)
        
    }
}
export  const removeData = async(id)=>{
    try {
       await axios.delete("/api/contacts?id=" + id)
    } catch (error) {
        throw new Error (error.message)
        
    }
}