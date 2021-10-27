const express= require ('express');
const comment = require('../models/comment');
const commentrouter = express.Router()

//get all
commentrouter.get("/",(req,res,next) => {
    User.find((err,item) => {
        if (err){
            console.log (err)
            res.status(500)
            return next (err)
        }
        return res.status(200).send(item)
    })
});
commentrouter.get("/:ItemId", (req, res, next) => {
    inventory.findOne(
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
  commentrouter.put("/:commentId", (req, res, next) => {
    Movie.findOneAndUpdate(
      { _id: req.params.commentId},
      req.body,
      {new: true},
      (err, updatedcomment) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedUser)
      }
) 

})
commentrouter.delete("/:UserId", (req, res, next) => {
    comment.findOneAndDelete(
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
  commentrouter.post("/", (req, res, next) => {
    const comment = new Movie(req.body)
    comment.save((err, savedcomment) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedcomment)
    })
  })
  module.exports = commentrouter