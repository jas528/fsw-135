const mongoose =require("mongoose")
const Schema=mongoose.Schema

const issueSchema= new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
   }
})
module.exports=mongoose.model('Issue', issueSchema)