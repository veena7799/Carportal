import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartserviceService } from '../cartservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-hatchback',
  templateUrl: './hatchback.component.html',
  styleUrls: ['./hatchback.component.css']
})
export class HatchbackComponent implements OnInit {

  hatchbackcars:any=[]
  constructor(private us:UserserviceService,private route:Router,private toast:ToastrService,private cs:CartserviceService) { }
  userobj:any
  username:any
  carobj:any=[]
  emptyhatchback:any
  searchTerm!: string;
  cartcount:any
  x=0
  searchText:any
  ngOnInit(): void {
    this.username=(localStorage.getItem("username"))
    this.username=(localStorage.getItem("username"))
   
          this.us.gethatchback().subscribe(
            res=>{
              this.carobj=res["message"]
              this.emptyhatchback=this.carobj.length
            },
            err=>{
              this.toast.error("Retrive failed")
              console.log(err)
            }
          )
        
          this.cs.getCartcount().subscribe(cartcount=>this.cartcount=cartcount)
          console.log("hatchback count",this.cartcount)
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