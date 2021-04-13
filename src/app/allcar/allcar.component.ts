import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-allcar',
  templateUrl: './allcar.component.html',
  styleUrls: ['./allcar.component.css']
})
export class AllcarComponent implements OnInit {
  carobj:any=[]
  constructor(private us:UserserviceService ,private route:Router) { }

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

  navigateToSpecifications(car:any){
    console.log(car)
      this.route.navigate(["/specifications",car.carname])
    }


}
