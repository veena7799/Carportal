import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-bookacar',
  templateUrl: './bookacar.component.html',
  styleUrls: ['./bookacar.component.css']
})
export class BookacarComponent implements OnInit {

  userobj:any=[]
  constructor(private us:UserserviceService, private route:Router) { }

  ngOnInit(): void {

    this.us.getuserprofile().subscribe(
      res=>{
        console.log("user is:",res["message"])
        this.userobj=res["message"]
      },
      err=>{
        alert("retrive failed")
        console.log(err)
      }
  
  )

}
}
