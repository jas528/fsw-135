const express =require("express");
const mongoose =require("mongoose");
const app = express();

app.use( express.json());

// Connect to DB
async function main() {
    await mongoose.connect('mongodb://localhost:27017/rock-the-vote')
    console.log("Connected to MongoDB")
}

main().catch(err=>console.log(err));
app.use("/user",require("./route/userRouter.js"))
app.use("/issue",require("./route/issuerouter.js"))
app.use("/comment",require("./route/commentrouter.js"))


app.listen(9000, ()=>{
    console.log("The App is listening on port 9000!")
})
