const express =require("express");
const mongoose =require("mongoose");
const app = express();
app.use(express.json());
main().catch(err=>console.log(err));
async function main(){
await mongoose.connect('mongodb://localhost:27017/inventorydb');
console.log("Connected to the DB")
}
app.get("/",(req,res)=>{
    res.send ("Good Morning, Dave.");
});

app.use("/inventory",require("./route/inventoryrouter"))
app.listen(3000, ()=>{
console.log("The App is listening")
});

