const { stringify } = require("@angular/compiler/src/util")
const mongoose = require("mongoose")

// define schema 

const paymentschema= new mongoose.Schema({
    Cardholdername:{type:String,required:true},
    Cardnumber:{type:Number,required:true},
    Expirymonth:{type:String,required:true},  
    Expiryyear:{type:String,required:true} 
})

// create a model

const Payment= mongoose.model("payment",paymentschema)

// export user model

module.exports=Payment;