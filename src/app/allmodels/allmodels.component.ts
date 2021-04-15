import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartserviceService } from '../cartservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-allmodels',
  templateUrl: './allmodels.component.html',
  styleUrls: ['./allmodels.component.css']
})
export class AllmodelsComponent implements OnInit {

 
  username:any 
  cartcount:any
 
    constructor(private us:UserserviceService,private route:Router,private toast:ToastrService, private cs:CartserviceService) {}
  
    ngOnInit(): void {
      this.username=(localStorage.getItem("username"))

      this.us.getCartCount(this.username).subscribe(
        res=>{
            this.cartcount=res["message"]
           //console.log(this.cartcount)
            this.cs.setCartcount(this.cartcount)
            console.log("userdashboard  count",this.cartcount)
        },
        err=>{
             this.toast.error("cartcount is not defined")
        }
      )
      this.cs.getCartcount().subscribe(cartcount=>this.cartcount=cartcount)
  
    }
  
}
