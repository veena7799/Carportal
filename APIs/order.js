const express = require('express')
const orderApiObject = express.Router();

const Order = require('../models/orderschema')
const errorHandler = require("express-async-handler")

// import validate token middleware
const validateToken = require("./token/verifytoken")

orderApiObject.post('/createorder',errorHandler(async (req, res) => {
   
      const order = new Order(req.body);
     // console.log("Order",order)
      await order.save();
      res.send({ message: "New Order saved" });
 
  }));

  orderApiObject.get('/getorders/:username',errorHandler(async(req,res)=>{
    let ordersArray = await Order.find({ "orderStatus": true, "username": req.params.username })
    res.send({ message: ordersArray })
  }))


  module.exports = orderApiObject;