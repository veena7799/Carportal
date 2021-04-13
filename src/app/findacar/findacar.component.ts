import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-findacar',
  templateUrl: './findacar.component.html',
  styleUrls: ['./findacar.component.css']
})
export class FindacarComponent implements OnInit {


carobj:any=[]
searchTerm:string;
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
            
        
          

  
  navigateToSpecifications(car){
      this.route.navigate(["/specifications",car.carname])
  }
}
