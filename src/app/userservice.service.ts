import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  carobj:any
  cardelete:any
  user:any
  userobj:any
  hatchback="HatchBack"
  sedan="Sedan"
  suv="SUV"
  usercartobj:any
  username:any
  car:any
  x=0;
  x1=0;
  cartcount:any
 cc:any
  
  
    constructor(private hc:HttpClient) { }
  
    // creating user
  createuser(userobj:any):Observable<any>{
    return this.hc.post("/user/createuser",userobj)
  }
   // user login
  loginuser(userobj:any):Observable<any>{
    return this.hc.post("/user/loginuser",userobj)
  }
  
  // admin login
  adminuser(adminobj:any):Observable<any>
  {
    console.log(adminobj)
    return this.hc.post("/adminlogin/loginadmin",adminobj)
  }
  
  // Adding car
  createcar(carobj:any):Observable<any>{
    carobj.status=true
    console.log(carobj)
    return this.hc.post("/admin/createcar",carobj)
  }
  
  // get all cars
  getcar():Observable<any>{
    return this.hc.get("/admin/getcars")
  }
  editcar(carobj:any){
    
    this.carobj=carobj
  
  }
  sendeditcar(){
    return this.carobj
  }
  
  edituser(userobj:any){
    
    this.userobj=userobj
  
  }
  sendedituser(){

    return this.userobj
  }
  updateuser(userobj:any):Observable<any>{
   
    console.log(userobj)
     return this.hc.put("/user/updateuser",userobj)
  }
  updatecart(carobj:any):Observable<any>{
   
    console.log(carobj)
     return this.hc.put("/usercart/updatecart",carobj)
  }

  updatecar(carobj:any):Observable<any>{
   
    console.log(carobj)
     return this.hc.put("/admin/updatecar",carobj)
  }
  
  deletecar(carobj:any){
       this.cardelete=carobj;
  }
  senddeletecar(){
    return this.cardelete
  }
  
  deletecarindb(carobj:any):Observable<any>{
    console.log(carobj)
  return this.hc.delete("/admin/deletecar",carobj)
  }
  
  senduserdashboard(user:any){
  this.user=user
  }
  
  sendtouserdashboard()
  {
    return this.user
  }
  updatestatus(carobj:any):Observable<any>{
    console.log(carobj)
    return this.hc.put("admin/updatestatus",carobj)
  }
  
  getuserbyusername(userobj:any):Observable<any>{
    console.log("userlogin",userobj)
    return this.hc.get("user/getuser/"+userobj)
  }
  
  getuserprofile():Observable<any>{
    
    return this.hc.get("user/getusers")
  }
 

  addToCart(car:any):Observable<any>{
    console.log(car)
    return this.hc.post("/usercart/addtocart",car)
  }
  
  getusernameforcart(username:any){
    console.log(this.username)
  this.username=username
  }
  
  sendusernameforcart(){
    return this.username
  }
  
  getUsercartcars(usernameforcart:any):Observable<any>{
       console.log(usernameforcart)
    return this.hc.get("/usercart/getcarsfromcart/"+usernameforcart)
  }
  
  deleteCarFromCart(deletecar:any):Observable<any>{
    console.log(deletecar)
       return this.hc.post("/usercart/deletecar",deletecar)
  }
  
  // update price
  
  updateTotalprice(car:any):Observable<any>{
  
    return this.hc.put("/usercart/updatecarincart",car)
  }
  
  // create object to behaviorsubject with initial value
  private valueofX:BehaviorSubject<any>=new BehaviorSubject(this.x)
  
  getx(){
    return this.valueofX.asObservable()
  }
  
  setplusX(){
    this.valueofX.next(this.x++)
    console.log("x value",this.x)
  }
  
  setminusX(){
    this.valueofX.next(this.x--)
    console.log("x value",this.x)
  }
  
  getcarByCarname(carname:any):Observable<any>{
    console.log("hello:",carname)
    return this.hc.get("/admin/getcar/"+carname)
  }


  
  // update carcount
  
  updateCartCount(user:any):Observable<any>{
    console.log(user)
       return this.hc.put("/user/updatecartcount",user)
  }
  
  //update car after editing
  updatecarafteredit(car:any):Observable<any>{
    return this.hc.put("/admin/updatecarafteredit",car)
  }

  // update carcount from usercart
  updateCartCountfromusercart(username:any):Observable<any>{
  
          return this.hc.post("/user/getfromusercart",+username)
  }
  
  // get hatchback cars
  gethatchback():Observable<any>{
    console.log("hello")
    return this.hc.get("/admin/gethatchback/"+this.hatchback)
  }
  getsuv():Observable<any>{
    //console.log("hello")
    return this.hc.get("/admin/getsuv/"+this.suv)
  }
  getsedan():Observable<any>{
    //console.log("hello")
    return this.hc.get("/admin/getsedan/"+this.sedan)
  }



//store payment data
storePaymentData(payment:any):Observable<any>{
  console.log(payment)
  return this.hc.post("/payment/storepaymentdetails",payment)
}

// get cart count
getCartCount(userobj:any):Observable<any>{
  console.log("username",userobj)
  return this.hc.get("/usercart/getcartcount/"+userobj)
}

// get cart count
getcartcount(count:any){
 this.cc=count
}

setcartcount(){
  return this.cc
}
private valueofX1:BehaviorSubject<any>=new BehaviorSubject(this.x1)


  getx1(){
    return this.valueofX1.asObservable();
  }
  setX1(){
    this.valueofX1.next(this.x1++)
    console.log("x value",this.x1)
  }
  minusX1(){
    this.valueofX1.next(this.x1--)
    console.log("x value",this.x1)
  }
}
