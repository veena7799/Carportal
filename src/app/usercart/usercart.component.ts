
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartserviceService } from '../cartservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit {

  username:any
  userobj:any
  usercartallcars:any=[]
  quantity:any
  emptycart:any
  x:any
  i=0
  carobj:any
  car:any
  sum:any
  cartcount:any
 
    constructor(private us:UserserviceService, private route:Router ,private cs:CartserviceService) { }
  
    ngOnInit(): void {
      
      this.username=localStorage.getItem("username")
    console.log(this.username)
    this.us.getUsercartcars(this.username).subscribe(
      res=>{
        this.usercartallcars=res["message"]
        console.log(this.usercartallcars)
        this.emptycart=this.usercartallcars.length
        //console.log(this.emptycart)
        this.sum=0
        for(this.i=0;this.i<this.usercartallcars.length;this.i++){         
          this.sum =  this.sum + this.usercartallcars[this.i].carprice
          console.log(this.usercartallcars[this.i].carprice)
          console.log(this.sum)
    }
      },
      err=>{
        alert("something went wrong")
      }
    ) 
    this.us.getCartCount(this.username).subscribe(
      res=>{
        this.cartcount=res["message"]
        console.log(this.cartcount)
      }
    )
    }
  
    remove(car:any){
             console.log(car)
             car.username=this.username
             this.us.deleteCarFromCart(car).subscribe(
               res=>{
              if(res["message"]=="success"){
                 this.usercartallcars=res["carsarray"]
                 console.log(this.usercartallcars)
                 //console.log(this.cartcount)
                  this.cs.setCartcount(--this.cartcount)
                  
                 this.sum=0
                 for(this.i=0;this.i<this.usercartallcars.length;this.i++){
                  this.sum =  this.sum+this.usercartallcars[this.i].carprice
                  console.log(this.sum)
            }
              }
              else{
                alert("something went wrong")
              }
               },
               err=>{}
             )          
    }
    minus(car:any){
      car.username=this.username
      car.carprice=(car.carprice)/car.quantity
      console.log(car.carprice)
  
      if(car.quantity>1){
        car.quantity--
        car.carprice=(car.quantity*car.carprice)
        console.log("for minus",this.cartcount)
        this.cs.setCartcount(--this.cartcount)
      }
      this.us.updatecart(car).subscribe()
      this.sum=0
      for(let i=0;i<this.usercartallcars.length;i++){
        this.sum= this.sum + this.usercartallcars[i].carprice
      }
       
  
  }
  plus(car:any){
    car.username=this.username
    car.carprice=(car.carprice)/car.quantity
    car.quantity++
    console.log(car.quantity)
    car.carprice=(car.quantity*car.carprice)
    console.log(car.carprice)
    this.us.updatecart(car).subscribe()
      let c=++this.cartcount
        this.cs.setCartcount(c)
        console.log("for plus",this.cartcount)
    this.sum=0
   for(let i=0;i<this.usercartallcars.length;i++){
     this.sum= this.sum + this.usercartallcars[i].carprice
   }  
  }
  onSubmit(){
    this.route.navigateByUrl("/userdashboard/billingaddress")
  }
}
