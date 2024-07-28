const express = require("express")
const app=express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")
const orderRoute = require("./routes/order")

dotenv.config();
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("DB Connection Successfull")
})
.catch((err)=>{
    console.error("error connecting to mongoDB ",err)
})

//middlewares
app.use(express.json());
app.use("/api/auth", authRoute)
app.use("/api/order", orderRoute)


app.listen(8800,()=>{
    console.log("Backend server is running!");
});