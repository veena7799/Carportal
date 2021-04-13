//mini express app
const exp=require("express")
const userApiObj=exp.Router();
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")
const eah=require("express-async-handler")
const verify= require("./token/verifytoken")
userApiObj.use(exp.json())

// import userschema model

const User=require("../models/userschema")

// import usercartschema model

const Usercart=require("../models/usercartschema");
const { updateOne, update } = require("../models/userschema");


// create user
userApiObj.post("/createuser",eah( async(req,res)=>{
   
    console.log(req.body)
    let hashedPassword=await bcryptjs.hash(req.body.password,7)

    let userobj = await User.findOne({username:req.body.username})
    if(userobj==null){
        let newuserobj=  new User({
        username:req.body.username,
        password:hashedPassword,
        email:req.body.email,
        address:req.body.address,
        mobilenumber:req.body.phoneno,
        cartcount:0
        })
    await newuserobj.save()
    
    res.send({message:"User created successfully"})
    }
    else
    {
        res.send({messge:"user already existed"})
    }
    
})
)

// login user
userApiObj.post("/loginuser",eah(async(req,res)=>{


    console.log(req.body)
    let userobj = await User.findOne({username:req.body.username})
    console.log(userobj)
     if(userobj!=null)
     {
         if(await (userobj.password==req.body.password))
         {

             //  create a json token and sign it                 
             let signedToken= await jwt.sign({username:req.body.username},"cpaass",{expiresIn: 1000})

             // send signed token to the client
                 res.send({message:"You are successfully logged",token:signedToken,username:req.body.username})
         }
         else
         {
            res.send({message:"user credentials are wrong"})
         }
     }
     else
     {
        
         res.send({message:"user credentials are wrong"})
     }
}))




userApiObj.get("/getuser/:username",verify,eah(async(req,res,next)=>{
    console.log("hello")
    let user= await  User.findOne({username:req.params.username})
    console.log("user",user)
    
    // remove password from userobject
    delete user.password

    res.send({message:"success",userobj:user})
   
}))

userApiObj.get("/getusers/:username",verify,eah(async(req,res,next)=>{
    console.log("hello")
    let user= await  User.findOne({username:req.params.username})
    console.log("userone",user)
    res.send({message:user})
   
}))

  

userApiObj.put("/updateuser",eah(async (req,res)=>{
    console.log(req.body)
     let success=await user.updateOne({username:req.body.username},{username:req.body.username,
        password:req.body.password,
        mobilenumber:req.body.phoneno,})
    console.log(success)
     res.send({message:"updated successfully"})
   
   }))

// update cart count
userApiObj.put("/updatecartcount",eah(async(req,res)=>{
    console.log("req.body",req.body)
    let success = await User.updateOne({username:req.body.username},{cartcount:req.body.cartcount})
    console.log("updated",success)
}))

// update cart count from user cart
userApiObj.post("/getfromusercart:username",eah(async(req,res)=>{
    console.log(req.params.username)
    let success = await findOne({username:req.params.username})
    console.log(success)
    res.send({message:success})
}))

// update cart count 
userApiObj.put("/updatecartcount",eah(async(req,res)=>{
console.log("cart count",req.body)
let success = await User.updateOne({username:req.body.username},{cartcount:req.body.cartcount})

}))


// get cart count
userApiObj.get("/getcartcount/:username",eah(async(req,res)=>{
console.log("USERNAME for cart count",req.params.username)

let cartobj = await User.findOne({username:req.params.username})
console.log("Array",cartobj)
let count = cartobj.cartcount
console.log("cart count",count)
res.send({message:"success",userobj:cartobj})
}))



// export
module.exports=userApiObj;