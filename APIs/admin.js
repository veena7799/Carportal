//mini express app
const exp=require("express")
const adminApiObj=exp.Router();
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")
const eah=require("express-async-handler")
adminApiObj.use(exp.json())

const admin=require("../models/adminschema")

 
//config cloudinary
const cloudinary = require("cloudinary").v2
const { CloudinaryStorage } = require("multer-storage-cloudinary")
const multer = require("multer")


// configure cloudinary credentials
cloudinary.config({
    cloud_name:'dcpmrxzkj',
    api_key:'263468443287927',
    api_secret: 'Rjx5WBjQWG6swzKwn_HC9-mSbF8'
   });
   
// Configure cloudinary storage settings
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params:async (req, file) => {
    return {
    folder: 'carportal',
    public_id: file.fieldname + '-' + Date.now()
    }},
   });
    // configure multer
    var upload = multer({ storage: storage });
    adminApiObj.post("/createcar",upload.single('photo'),(eah(async(req,res)=>{
    
  req.body=JSON.parse(req.body.productobj)
  req.body.image=req.file.path;
  let productobj=req.body      
  console.log(req.body)
 //insert 
 
 let success = await admin.findOne({carid:req.body.carid})
 console.log("success",success)

if(success==null){
  let Admin = await new admin({
    carid:req.body.carid,
    cartype:req.body.cartype,
    carname:req.body.carname,
    carcolour:req.body.carcolour,
    numberofseats:req.body.numberofseats,
    enginetype:req.body.enginetype,
    fueltype:req.body.fueltype,
    fueltankcapacity:req.body.fueltankcapacity,
    overalllength:req.body.overalllength,
    overallwidth:req.body.overallwidth,
    overallheight:req.body.overallheight,
    wheelbase:req.body.wheelbase,
    tyresize:req.body.tyresize,
    tyretype:req.body.tyretype,
    carprice:req.body.carprice,
    status:req.body.status,
    carimage:req.body.image
    
   

})
await Admin.save();

res.send({message:"car added successfully"})
}
    
else{
  res.send({message:"Car id already exists... choose other id"})
}

 })))
 
// get all cars
adminApiObj.get("/getcars",eah(async (req,res)=>{
  let carobj= await admin.find({status:true})
  res.send({message:carobj})
}))

adminApiObj.get("/getcar/:carname",eah(async (req,res)=>{
  let car= await admin.findOne({carname:req.params.carname})
  console.log(car)
  res.send({message:car})
}))

adminApiObj.put("/updatecar",eah(async (req,res)=>{
 console.log(req.body)
  let success=await admin.updateOne({carname:req.body.carname},{cartype:req.body.cartype,
  carcolour:req.body.carcolour,numberofseats:req.body.numberofseats,
  overalllength:req.body.overalllength,overallheight:req.body.overallheight,carprice:req.body.carprice})
 console.log(success)
  res.send({message:"updated successfully"})

}))
adminApiObj.put("/updatestatus",eah(async (req,res)=>{
  console.log(req.body)
   let success=await admin.updateOne({carid:req.body.carid},{status:req.body.status})
  
  console.log(success)
   res.send({message:"updated successfully"})
 
 }))

adminApiObj.get("/gethatchback/:cartype",eah(async(req,res)=>{
  
console.log("cartype",req.params.cartype)
  let cartype= await admin.find({$and:[{cartype:req.params.cartype},{status:true}]})
  console.log("cartype:",cartype)
  res.send({message:cartype})
 
}))
adminApiObj.get("/getsuv/:cartype",eah(async(req,res)=>{
  
  console.log("cartype",req.params.cartype)
    let cartype= await admin.find({$and:[{cartype:req.params.cartype},{status:true}]})
    console.log("cartype:",cartype)
    res.send({message:cartype})
   
  }))

adminApiObj.get("/getsedan/:cartype",eah(async(req,res)=>{
  
    console.log("cartype",req.params.cartype)
      let cartype= await admin.find({$and:[{cartype:req.params.cartype},{status:true}]})
      console.log("cartype:",cartype)
      res.send({message:cartype})
     
}))






// export
module.exports=adminApiObj;
