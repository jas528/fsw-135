const express= require ('express');
const userRouter = express.Router()
const User = require("../models/user")

userRouter.get("/",(req,res,next) => {
    User.find((err,item) => {
        if (err){
            console.log (err)
            res.status(500)
            return next (err)
        }
        return res.status(200).send(item)
    })
});
//get one
userRouter.get("/:itemId", (req, res, next) => {
    User.findOne(
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
  //delete
  userRouter.delete("/:userId", (req, res, next) => {
    User.findOneAndDelete(
      {_id: req.params.userId}, 
      (err, deletedItem) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
      }
    )
  })
//post
userRouter.post("/", (req, res, next) => {
    const newUser = new User(req.body)
    newUser.save((err, savedUser) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedUser)
    })
  })
  
  
  userRouter.put("/:UserId", (req, res, next) => {
    User.findOneAndUpdate(
      { _id: req.params.UserId},
      req.body,
      {new: true},
      (err, updatedUser) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedUser)
      }
) 

})


//Delete

//post

 

module.exports = userRouter
