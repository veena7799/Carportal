const { stringify } = require("@angular/compiler/src/util")
const mongoose = require("mongoose")

// define schema 

const useraddschema= new mongoose.Schema({
    address:{type:String,required:true},
    state:{type:String,required:true},
    city:{type:String,required:true},  
    pincode:{type:Number,required:true} 
})

// create a model

const Useradd= mongoose.model("useraddschema",useraddschema)

// export user model

module.exports=Useradd;