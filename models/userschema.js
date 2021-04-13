const { stringify } = require("@angular/compiler/src/util")
const mongoose = require("mongoose")

// define schema 

const userschema= new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true},
    address:{type:String,required:true},
    mobilenumber:{type:Number,required:true},
    
})

// create a model

const User= mongoose.model("user",userschema)

// export user model

module.exports=User;