import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted:boolean=false;
  registerForm:any
  constructor(private us:UserserviceService,private route:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.registerForm=new FormGroup({
      username:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required,Validators.pattern("^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$")]),
      email:new FormControl(null,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3}$")]),
      phoneno:new FormControl(null,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      address:new FormControl(null,Validators.required),
      termCondition:new FormControl(null,Validators.required),
    })
  }

  getControls(){
    return this.registerForm.controls;
  }

    onSubmit(){
      this.submitted=true;
      if(this.registerForm.valid){
        console.log(this.registerForm.value)
        this.us.createuser(this.registerForm.value).subscribe(
          res=>{
            if(res["message"]=="User created successfully"){
               this.toastr.success('User successfully registered')
              this.route.navigateByUrl("/login")
            }
            else{
              this.toastr.warning('Username is already existed.Please choose another')
            }
          },
          err=>{
            this.toastr.error('user registration failed','title')
            console.log(err)
          }
        )
      }
    }

  
}
