const mongoose =require("mongoose")
const Schema=mongoose.Schema

const commentSchema= new Schema({
    comment: {
        type: String,
        require: true
    },
    issue: {
        type: Schema.Types.ObjectId,
        ref: "Issue"
   }
})
module.exports=mongoose.model('Comment', commentSchema)
