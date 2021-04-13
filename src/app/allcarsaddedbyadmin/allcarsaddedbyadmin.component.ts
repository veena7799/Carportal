import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-allcarsaddedbyadmin',
  templateUrl: './allcarsaddedbyadmin.component.html',
  styleUrls: ['./allcarsaddedbyadmin.component.css']
})
export class AllcarsaddedbyadminComponent implements OnInit {

  carobj:any=[]
  carobjcopy:any=[]
  carcopyobj:any=[]
 car:any
 cardelete:any
 i=0;
  constructor(private us:UserserviceService,private route:Router) { }
  
  ngOnInit(): void {
  this.us.getcar().subscribe(
    res=>{
      this.carobj=res["message"]
      
    },
    err=>{
      alert("retrive failed")
      console.log(err)
    }
  )
}
onSubmit(){
  this.route.navigateByUrl("/admindashboard/admin")
}
Edit(ref:any){
       this.car=ref
      this.us.editcar(ref)
      this.route.navigateByUrl("/admindashboard/editcar")
      
}
Delete(ref:any)
{
      ref.status=false
      console.log(ref)
      this.us.updatestatus(ref).subscribe()
}


}
