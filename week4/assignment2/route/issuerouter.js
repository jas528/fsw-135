const express= require ('express');
const issueRouter = express.Router()
const issue = require("../models/issue")

issueRouter.get("/",(req,res,next)=>{
    console.log (inventory)
    issue.find((err,item)=>{

        console.log(item)
        if (err){
            console.log (err)
            res.status(500)
            return next (err)
        }else
        {return res.status(200).send(item)}
})
});
//getone
issueRouter.get("/:itemId", (req, res, next) => {
    issue.findOne(
      {_id: req.params.itemId}, 
      (err, foundItem) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(foundItem)
      }
    )
  })
  //Delete
issueRouter.delete("/:itemId", (req, res, next) => {
    issue.findOneAndDelete(
      {_id: req.params.commentId}, 
      (err, deletedItem) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
      }
    )
  })
  //update
  issueRouter.put("/:itemId", (req, res, next) => {
    issue.findOneAndUpdate(
      { _id: req.params.movieID},
      req.body,
      {new: true},
      (err, updatedComment) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedcomment)
      })

  
})
module.exports = issueRouter