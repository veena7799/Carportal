const { stringify } = require("@angular/compiler/src/util")
const mongoose = require("mongoose")

// define schema 

const adminschema= new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true} 
})

// create a model

const Adminloginschema= mongoose.model("adminlogin",adminschema)

// export user model

module.exports=Adminloginschema;
