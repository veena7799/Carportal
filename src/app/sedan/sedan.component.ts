import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartserviceService } from '../cartservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-sedan',
  templateUrl: './sedan.component.html',
  styleUrls: ['./sedan.component.css']
})
export class SedanComponent implements OnInit {
  
  userobj:any
  username:any
  emptysedan:any
  carobj:any=[]
  searchTerm!: string;
  cartcount:any
  x=0
    constructor(private us:UserserviceService,private cs:CartserviceService,private route:Router,private toast:ToastrService) {}
  
    ngOnInit(): void {
      this.username=(localStorage.getItem("username"))
      this.username=(localStorage.getItem("username"))
      
            this.us.getsedan().subscribe(
              res=>{
                this.carobj=res["message"]
                this.emptysedan=this.carobj.length
              },
              err=>{
                alert("retrive failed")
                console.log(err)
              }
            )
            this.cs.getCartcount().subscribe(cartcount=>this.cartcount=cartcount)
          console.log("count",this.cartcount)
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
                  this.cs.setCartcount(++this.cartcount)             
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
    }
    cart(){
      this.route.navigateByUrl("addtoCart")
    }
    navigateToSpecifications(car:any){
      console.log(car)
        this.route.navigate(["/specifications",car.carname])
    }
  }