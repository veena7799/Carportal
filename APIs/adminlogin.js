//mini express app
const exp=require("express")
const adminloginApiObj=exp.Router();
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")
const eah=require("express-async-handler")
adminloginApiObj.use(exp.json())
const verify= require("./token/verifytoken")

const adminlogin= require("../models/adminloginschema")



 // admin login
 adminloginApiObj.post("/createadmin",(eah(async (req,res)=>{

    console.log(req.body)
    let hashedPassword=await bcryptjs.hash(req.body.password,7)
    console.log("ha",hashedPassword)
    let adminobj = await adminlogin.findOne({username:req.body.username})
    console.log("adminobj",adminobj)   
    if(adminobj==null){
            let Admin = await new adminlogin({
            username:req.body.username,
            password:hashedPassword,  
        
        })
        console.log(Admin)
        await Admin.save();
        res.send({message:"admin created"})
        }
        else{
            res.send({messge:"admin already existed"})
        }
       

 })))

 adminloginApiObj.post("/loginadmin",eah(async(req,res)=>{


    console.log(req.body)
    let adminobj = await adminlogin.findOne({username:req.body.username})
    console.log(adminobj)
     if(adminobj!=null)
     {
        let result= await bcryptjs.compare(req.body.password,adminobj.password)
        console.log("result",result)
          if(result==false)
          {
             res.send({message:"admin credentials are wrong"})
          }
          else
          {
              //  create a json token and sign it                 
              let signedToken= await jwt.sign({username:req.body.username},"cpaass",{expiresIn: 1000})
 
              // send signed token to the client
                  res.send({message:"You are successfully logged",token:signedToken,username:req.body.username})
          }
      }
     else
     {    
         res.send({message:"admin credentials are wrong"})
     }



}))


adminloginApiObj.get("/getadminlogin/:username",verify,eah(async(req,res,next)=>{
    console.log("hello")
    let adminname= await  adminlogin.findOne({username:req.params.username})
    console.log("adminname",adminname)
    
    // remove password from userobject
    delete adminname.password

    res.send({message:"success",adminobj:adminname})
   
}))

adminloginApiObj.post("/editcar",eah(async(req,res)=>{

    console.log(req.body.carname)
    console.log("hi")
    let adminobj = await adminlogin.findOne({carname:req.body.carname})
    console.log(adminobj)
    
     
    



}))



// export user model

module.exports=adminloginApiObj;
