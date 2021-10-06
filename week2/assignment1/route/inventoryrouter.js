const express= require ('express');
const inventoryRouter= express.Router()
const inventory = require("./../models/inventorymodels")

//Get All
inventoryRouter.get("/",(req,res,next)=>{
    console.log (inventory)
    inventory.find((err,item)=>{

        console.log(item)
        if (err){
            console.log (err)
            res.status(500)
            return next (err)
        }else
        {return res.status(200).send(item)}
})
});
//get one
inventoryRouter.get("/:itemId", (req, res, next) => {
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

movieRouter.put("/:movieId", (req, res, next) => {
    Movie.findOneAndUpdate(
      { _id: req.params.movieID},
      req.body,
      {new: true},
      (err, updatedMovie) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedMovie)
      }
) 

})
//Delete
movieRouter.delete("/:movieId", (req, res, next) => {
    Movie.findOneAndDelete(
      {_id: req.params.movieId}, 
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
movieRouter.post("/", (req, res, next) => {
    const newMovie = new Movie(req.body)
    newMovie.save((err, savedMovie) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedMovie)
    })
  })
module.exports=inventoryRouter