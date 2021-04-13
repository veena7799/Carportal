import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-suv',
  templateUrl: './suv.component.html',
  styleUrls: ['./suv.component.css']
})
export class SuvComponent implements OnInit {

  userobj:any
  username:any
  emptysuv:any
  carobj:any=[]
  searchTerm!: string;
  cartcount:any
  x=0
    constructor(private us:UserserviceService,private route:Router,private toast:ToastrService) {}
  
    ngOnInit(): void {
          this.username=(localStorage.getItem("username"))
          this.username=(localStorage.getItem("username"))
          this.us.getuserbyusername(this.username).subscribe(
            res=>{
              if(res["message"]=="success"){
                this.userobj=res["userobj"]
                this.us.getsuv().subscribe(
                  res=>{
                    this.carobj=res["message"]
                    this.emptysuv=this.carobj.length
                  },
                  err=>{
                    alert("retrive failed")
                    console.log(err)
                  }
                )
              }
              else{
                alert(res["message"])
                this.route.navigateByUrl("/login")
              }
            },
            err=>{
              alert("something went wrong")
              console.log(err)
            }
          )
    }

    logout()
    {
            this.route.navigateByUrl("/home")
    }
    
    addtoCart(car:any){
      car.username=this.username
      this.us.addToCart(car).subscribe(
        res=>{
          if(res["message"]=="car added to cart successfully"){
                  this.toast.success("car added to cart successfully")
                  this.us.getx().subscribe(valueofX=>this.x=valueofX)   
                //  this.us.setplusX()                 
                 console.log(this.x)
                 this.userobj.cartcount=++this.x  
                 this.us.updateCartCount(this.userobj).subscribe()               
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
      this.route.navigateByUrl("addtoCart")
    }
    navigateToSpecifications(car:any){
      console.log(car)
        this.route.navigate(["/specifications",car.carname])
    }
}