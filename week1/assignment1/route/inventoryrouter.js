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
module.exports=inventoryRouter