import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-specifications',
  templateUrl: './specifications.component.html',
  styleUrls: ['./specifications.component.css']
})
export class SpecificationsComponent implements OnInit {
  carobjs:any;
  userobj:any
  username:any
  carobj:any=[]
  searchTerm!: string;
  cartcount:any
  x=0
  constructor(private us:UserserviceService,private ar:ActivatedRoute, private route:Router, private toast:ToastrService) { }
  
  ngOnInit(): void {
  this.ar.params.subscribe(
    params=>{
     // console.log("params",params)
      this.us.getcarByCarname(params.carname).subscribe(
        res=>{
         // console.log("eeee:",res)
          this.carobjs=res["message"]
         // console.log("details",this.carobjs)
          
        },
        err=>{
          alert("something went wrong")
          console.log(err)
        }
      )
    }
  )
}

addtoCart(car:any){
  car.username=this.username
  this.us.addToCart(car).subscribe(
    res=>{
      if(res["message"]=="car added to cart successfully"){
              this.toast.success("car added to cart successfully")
              this.us.getx().subscribe(valueofX=>this.x=valueofX)   
              this.us.setplusX()                 
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
}
