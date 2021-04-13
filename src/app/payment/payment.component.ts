import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  isSubmitted=false;
  constructor(private us:UserserviceService,private toast:ToastrService, private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(formRef:any){

    
 console.log(formRef.valid)


      
        console.log(formRef)
        this.isSubmitted = true;
             this.us.storePaymentData(formRef).subscribe(
               res=>{
                 if(res["message"]=="Payment done successfully"){
                   this.toast.success("Payment done successfully")
                  this.route.navigateByUrl("/userdashboard")
                  this.toast.info("Thanks for booking car")
                 }
                 else{
                   this.toast.warning("Payment failed")
                 }
               },
               err=>{
                this.toast.warning("Payment failed")
                 console.log(err)
               }
             )
      
  }
  onsubmit(){
    
  }

}
