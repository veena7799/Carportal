import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  username:any
  userobj:any=[]
  constructor(private us:UserserviceService, private route:Router, private toast:ToastrService) { }

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

onSubmit(ref:any)
{
    this.us.updateuser(this.userobj).subscribe()
    this.toast.success("Updated successfully")
    
}

Cancelupdate(){
  this.toast.info('No changes are made')
}

}
