const { stringify } = require("@angular/compiler/src/util")
const mongoose = require("mongoose")

// define schema 

const usercartschema= new mongoose.Schema({
    carid:{type:String,required:true},
    cartype:{type:String,required:true},
    carname:{type:String,required:true},
    carcolour:{type:String,required:true},
    numberofseats:{type:String,required:true},
    overalllength:{type:String,required:true},
    overallheight:{type:String,required:true},
    status:{type:Boolean,required:true},
    carimage:{type:String,required:true},
    username:{type:String,required:true},
    i:{type:Number,required:true},
    quantity:{type:Number,required:true},
    carprice:{type:Number,required:true}
    
})

// create a model

const Usercart= mongoose.model("usercart",usercartschema)

// export user model

module.exports=Usercart;
