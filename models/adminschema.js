const { stringify } = require("@angular/compiler/src/util")
const mongoose = require("mongoose")

// define schema 

const adminschema= new mongoose.Schema({
    carid:{type:String,required:true},
    cartype:{type:String,required:true},
    carname:{type:String,required:true},  
    carcolour:{type:String,required:true},
    numberofseats:{type:String,required:true},
    enginetype:{type:String,required:true},
    fueltype:{type:String,required:true},
    fueltankcapacity:{type:String,required:true},
    overalllength:{type:String,required:true},
    overallwidth:{type:String,required:true},
    wheelbase:{type:String,required:true},
    tyresize:{type:String,required:true},  
    tyretype:{type:String,required:true}, 
    overallheight:{type:String,required:true},
    carprice:{type:String,required:true},
    status:{type:Boolean,required:true},
    carimage:{type:String,required:true}   
})

// create a model

const Admin= mongoose.model("admin",adminschema)

// export user model

module.exports=Admin;
