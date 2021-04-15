import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-useraddress',
  templateUrl: './useraddress.component.html',
  styleUrls: ['./useraddress.component.css']
})
export class UseraddressComponent implements OnInit {

  username:any
  userobj:any=[]
  isSubmitted=false;
  constructor(private us:UserserviceService,private toast:ToastrService, private route:Router) { }

  ngOnInit(): void {
    this.username=(localStorage.getItem("username"))
    //console.log(this.username)
    this.us.getuserbyusername(this.username).subscribe(
      res=>{
        if(res["message"]=="success"){
          this.userobj=res["userobj"]
        }
        else{
          this.toast.warning("Session expired please login to continue")
          this.route.navigateByUrl("/login")
        }
      },
      err=>{
        alert("something went wrong")
        console.log(err)
      }
    )

  }

  onSubmit(formRef:any){

    
 console.log(formRef.valid)


      
        console.log(formRef)
        this.isSubmitted = true;
             this.us.storeShippingAddData(formRef).subscribe(
               res=>{
                 if(res["message"]=="Shipping address added successfully"){
                   this.toast.success("Shipping address added successfully")
                  this.route.navigateByUrl("/userdashboard/payment")
                  
                 }
                 else{
                   this.toast.warning("failed to add address")
                 }
               },
               err=>{
                this.toast.warning("failed to add address")
                 console.log(err)
               }
             )
      
  }
  

}
