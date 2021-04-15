//mini express app
const exp=require("express")
const useraddApiObj=exp.Router();
const eah=require("express-async-handler")
useraddApiObj.use(exp.json())

// import useraddschema model

const Useradd=require("../models/useraddschema")

useraddApiObj.post("/adduseraddress",eah( async(req,res)=>{
    console.log(req.body)  
        let newuseraddobj=  new Useradd({
            address:req.body.address,
            state:req.body.state,
            city:req.body.city,
            pincode:req.body.pincode
        })
    await newuseraddobj.save() 
    res.send({message:"Shipping address added successfully"})
   
})
)

// export
module.exports=useraddApiObj