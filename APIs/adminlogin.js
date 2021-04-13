//mini express app
const exp=require("express")
const adminloginApiObj=exp.Router();
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")
const eah=require("express-async-handler")
adminloginApiObj.use(exp.json())

const adminlogin= require("../models/adminloginschema")



 // admin login
 adminloginApiObj.post("/createadmin",(eah(async (req,res)=>{

    console.log(req.body)
    
    let Admin = await new adminlogin({
        username:req.body.username,
        password:req.body.password,  
    
    })
    console.log(Admin)
    await Admin.save();
    res.send({message:"admin created"})

 })))

 adminloginApiObj.post("/loginadmin",eah(async(req,res)=>{


    console.log(req.body)
    let adminobj = await adminlogin.findOne({username:req.body.username})
    console.log(adminobj)
     if(adminobj!=null)
     {
         if(await (adminobj.password==req.body.password))
         {

             //  create a json token and sign it                 
             let signedToken= await jwt.sign({username:req.body.username},"cpaass",{expiresIn: 10})

             // send signed token to the client
                 res.send({message:"You are successfully logged",token:signedToken,username:req.body.username})
         }
         else
         {
            res.send({message:"admin credentials are wrong"})
         }
     }
     else
     {    
         res.send({message:"user credentials are wrong"})
     }



}))

adminloginApiObj.post("/editcar",eah(async(req,res)=>{

    console.log(req.body.carname)
    console.log("hi")
    let adminobj = await adminlogin.findOne({carname:req.body.carname})
    console.log(adminobj)
    
     
    



}))



// export user model

module.exports=adminloginApiObj;
