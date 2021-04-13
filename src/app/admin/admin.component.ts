import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  file: any;
  carobj:any

  constructor(private us:UserserviceService,private route:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  incomingfile(event:any){
    this.file= event.target.files[0];
  }
  formData = new FormData()
  onSubmit(ref:any)
  {
    let productobj=ref
    productobj.status=true
    //adding image and other data to FormData object
    this.formData.append('photo',this.file,this.file.name);
    this.formData.append("productobj",JSON.stringify(productobj))
    console.log(productobj)
     console.log(this.formData)
    this.us.createcar(this.formData).subscribe(
      res=>{
        if(res["message"]=="car added successfully"){
          alert(res["message"])
          this.toastr.success('New Car data added successfully')
          this.route.navigateByUrl("/admindashboard")
        }
        else{
          alert("car not added successfully")
          this.toastr.warning('Car data is not added ')
        }
      },
      err=>{
        console.log(err)
        alert("something went wrong")
      }
    )
  }
}
