import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { CartserviceService } from '../cartservice.service';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  
  userobj:any
  username:any
  carobj:any=[]
  searchTerm!: string;
  cartcount:any
  x=0
  searchText: any
    constructor(private us:UserserviceService,private route:Router,private toast:ToastrService, private cs:CartserviceService) {}
  
    ngOnInit(): void {
          this.username=(localStorage.getItem("username"))
          console.log(this.username)
          this.us.getuserbyusername(this.username).subscribe(
            res=>{
              if(res["message"]=="success"){
                this.userobj=res["userobj"]
                this.us.getcar().subscribe(
                  res=>{
                    this.carobj=res["message"]
                  },
                  err=>{
                    this.toast.error("session expired")
                    console.log(err)
                  }
                )
              }
              else{
               
                this.route.navigateByUrl("/login")
              }
            },
            err=>{
              alert("something went wrong")
              console.log(err)
            }
          )
       //  this.us.getusernameforcart(this.username)

          // send cart count
          this.us.getCartCount(this.username).subscribe(
            res=>{
                this.cartcount=res["message"]
               //console.log(this.cartcount)
                this.cs.setCartcount(this.cartcount)
            }

          )
          this.cartcount=this.cs.getCartcount()
        console.log(this.cartcount)
    }
    logout()
    { 
      localStorage.clear()
      this.toast.success("Logged out successfully!!")
      this.route.navigateByUrl("/home")
    }
    
    addtoCart(car:any){
      car.username=this.username
      console.log(this.username)
      this.us.addToCart(car).subscribe(
        res=>{
          if(res["message"]=="car added to cart successfully"){
                  this.toast.success("car added to cart successfully")
                     this.cartcount++ 
                    
                    this.cs.setCartcount(this.cartcount)                  
                 this.route.navigateByUrl("/userdashboard/usercart")             
                }
          else{
            this.toast.error(res["message"])
          }
        },
        err=>{
             console.log(err)
             this.toast.error(err)
        }

      )
      this.us.getusernameforcart(this.username)
    
    }
    cart(){
      this.route.navigateByUrl("/userdashboard/usercart")
    }
    navigateToSpecifications(car:any){
      console.log(car)
        this.route.navigate(["/specifications",car.carname])
    }
  
}
