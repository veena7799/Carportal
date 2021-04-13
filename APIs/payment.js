//mini express app
const exp=require("express")
const paymentApiObj=exp.Router();
const eah=require("express-async-handler")
paymentApiObj.use(exp.json())

// import userschema model

const Payment=require("../models/paymentschema")

paymentApiObj.post("/storepaymentdetails",eah( async(req,res)=>{
    console.log(req.body)  
        let newpaymentobj=  new Payment({
        Cardholdername:req.body.Cardholdername,
    Cardnumber:req.body.Cardnumber,
    Expirymonth:req.body.expm,  
    Expiryyear:req.body.expy
        })
    await newpaymentobj.save() 
    res.send({message:"Payment done successfully"})
   
})
)

// export
module.exports=paymentApiObj