//mini express app
const exp=require("express")
const usercartApiObj=exp.Router();

const eah=require("express-async-handler")
usercartApiObj.use(exp.json())

const Usercart=require("../models/usercartschema")
const Admincart= require("../models/adminschema");

 
// add to cart

usercartApiObj.post("/addtocart",eah(async(req,res)=>{


let success= await Usercart.findOne({$and:[{username:req.body.username},{carid:req.body.carid}]})
console.log(success)

if(success==null){
    //insert 
   let usercart = await new Usercart({
    carid:req.body.carid,
    cartype:req.body.cartype,
    carname:req.body.carname,
    carcolour:req.body.carcolour,
    numberofseats:req.body.numberofseats,
    overalllength:req.body.overalllength,
    overallheight:req.body.overallheight,
    status:req.body.status,
    carimage: req.body.carimage,
    username:req.body.username,
    i:1,
    quantity:1,
    carprice:req.body.carprice,


})

await usercart.save();
res.send({message:"car added to cart successfully"})
}
else{
    res.send({message:"already added to cart"})
}
}))



// get cars from cart
usercartApiObj.get("/getcarsfromcart/:username",eah(async(req,res)=>{
    
    console.log(this.username)
   let cartcars= await Usercart.find({username:req.params.username})
   console.log("cartcars",cartcars)
   let carsarray=[]
   for(let i of cartcars){
    let success = await Admincart.findOne({$and:[{carid:i.carid},{status:true}]})
    //console.log("success",success)
    if(success!=null){
        let success2= await Usercart.findOne({$and:[{username:req.params.username},{carid:i.carid}]})
        console.log("success",success2)
        carsarray.push(success2)
    }
   }
   console.log("carsarray",carsarray)
   res.send({message:carsarray})

}))

// delete car from cart
usercartApiObj.post("/deletecar",eah(async(req,res)=>{
    
       console.log(req.body)
    let deletecar= await Usercart.deleteOne({$and:[{username:req.body.username},{carid:req.body.carid}]})
    console.log("deleted ones",deletecar)
    let carsarray= await Usercart.find({username:req.body.username})
    console.log("after delete",carsarray)
    res.send({message:"success",carsarray:carsarray})
    
}))


// update in cart 
usercartApiObj.put("/updatecarincart",eah(async(req,res)=>{
    
   let updatedcarincart= await Usercart.updateOne({carid:req.body.carid},{carprice:req.body.carprice})
   console.log(updatedcarincart)
   
}))

// update quantity and product price
usercartApiObj.put("/updatecart",eah(async(req,res)=>{
    let success = await Usercart.updateOne({$and:[{username:req.body.username},{carid:req.body.carid}]},
        {quantity:req.body.quantity,carprice:req.body.carprice})
        console.log("quantity and price updated",success)
}))

// get cart count
usercartApiObj.get("/getcartcount/:username",eah(async(req,res)=>{
    let success = await Usercart.find({username:req.params.username})
    //console.log("length",success.length)
   //console.log("cartcars for cart count",success)
   let carsarray=[]
   for(i=0;i<success.length;i++){
        let success1= await Admincart.findOne({$and:[{carid:success[i].carid},{status:true}]})
        
        if(success1!=null)
        {
            let success2= await Usercart.findOne({$and:[{username:req.params.username},{carid:success[i].carid}]})
           

            // push into array
            carsarray.push(success2)
        }
   }
  
   let count= 0
   for(let i of carsarray){
       count = count + i.quantity
   }
    res.send({message:count})
}))

// export
module.exports=usercartApiObj;