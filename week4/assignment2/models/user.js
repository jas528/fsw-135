const mongoose =require("mongoose")
const Schema=mongoose.Schema

const userSchema= new Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        require: true
   }
})
module.exports=mongoose.model('User', userSchema)
