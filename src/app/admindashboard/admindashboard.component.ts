import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  username:string
  adminobj:any
  constructor(private route:Router, private toast:ToastrService, private us:UserserviceService) { }

  ngOnInit(): void {
    this.username=localStorage.getItem("username")
    this.us.getadminbyusername(this.username).subscribe(
      res=>{
        if(res["message"]=="success"){
          this.adminobj=res["message"]
          
        }
        else{
          this.toast.error("Session expired...Login again")
          localStorage.clear()
          this.route.navigateByUrl("/login")
        }
      },
      err=>{
        this.toast.error("Session expired...Login again")
        localStorage.clear()
        console.log(err)
      }
    )
  }

  logout(){
    localStorage.clear()
    this.route.navigateByUrl("/login")
  }
}
