const express = require9("express")
const moiveRouter= expressRouter()

const Movie = require ('_./modelmovie.js')
//
//get post
moiveRouter.post("/",(req,res, next) =>{
const newMovie =req.body
newMovie.id=uuid(
    movie.pu(newMovie)
)
})




//Get one

movieRouter.get("/", (req, res, next) => {
    Movie.find((err, movies) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(movies)
    
  })




}

//put

moiveRouter.put("/:movieId",(req,res,next)=>{
    const movieId =req.params.movieId
    movieRouter.findOneAndUpdate(, (req, res, next) => {
        Movie.find((err, movies) => {
          if(err){
            res.status(500)
            return next(err)
          }
          return res.status(200).send(movies)
        
      }