const exp=require("express")
const app=exp();
require("dotenv").config()

const jwt=require("jsonwebtoken")
const mongoose=require("mongoose")
const bcryptjs=require("bcryptjs")
const path=require("path")

app.use(exp.static(path.join(__dirname,'dist/Carportal')))

//const dburl="mongodb+srv://cdb35:cdb35@cluster0.jldrf.mongodb.net/cdb035?retryWrites=true&w=majority"
// connect to mongoose
mongoose.connect(process.env.DBURL,{useNewUrlParser:true,useUnifiedTopology:true})

// get default connection object

const db=mongoose.connection;
db.on('error',()=>{console.log("error in db connection")})
db.once('open',()=>{console.log("Connected to db")})


// import userapi object
const userApiObj=require("./APIs/user")
const adminApiObj=require("./APIs/admin")
const adminloginApiobj=require("./APIs/adminlogin")
const usercartApiObj=require("./APIs/usercart")
const orderApiObject=require("./APIs/payment")

app.use("/user",userApiObj)
app.use("/admin",adminApiObj)
app.use("/adminlogin",adminloginApiobj)
app.use("/usercart",usercartApiObj)
app.use("/payment",orderApiObject)


//invalid 
app.use((req,res,next)=>{
    res.send({messge:`${req.url} is not valid`})
})


//error handler
app.use((err,req,res,next)=>{
res.send({messge:"Error occured",reason:err.message})
})

const port = process.env.PORT
app.listen(port,()=>{console.log(`server started at port ${port}`)})


