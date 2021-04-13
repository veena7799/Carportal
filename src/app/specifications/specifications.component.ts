import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-specifications',
  templateUrl: './specifications.component.html',
  styleUrls: ['./specifications.component.css'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(-1440deg)' })),
      transition('rotated => default', animate('8000ms ease-out')),
      transition('default => rotated', animate('10000ms ease-in'))
  ])
]
})
export class SpecificationsComponent implements OnInit {
  
  state: string = 'default';
  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
}
  carobjs:any;
 
  username:any
  
  x=true
  constructor(private us:UserserviceService,private ar:ActivatedRoute, private route:Router, private toast:ToastrService) { }
  
  ngOnInit(): void {
    this.username=localStorage.getItem("username")
 console.log(this.username)
 if(this.username!=null){
         this.x=false
 }
  this.ar.params.subscribe(
    params=>{
     // console.log("params",params)
      this.us.getcarByCarname(params.carname).subscribe(
        res=>{
         // console.log("eeee:",res)
          this.carobjs=res["message"]
         // console.log("details",this.carobjs)
          
        },
        err=>{
          alert("something went wrong")
          console.log(err)
        }
      )
    }
  )
}
toProceed(){
  this.route.navigateByUrl("/login")
}

}
