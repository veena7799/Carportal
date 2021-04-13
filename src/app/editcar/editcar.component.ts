import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-editcar',
  templateUrl: './editcar.component.html',
  styleUrls: ['./editcar.component.css']
})
export class EditcarComponent implements OnInit {

  carobj:any

  constructor(private us:UserserviceService,private route:Router,private toastr:ToastrService ) { }

  ngOnInit(): void {
       this.carobj=this.us.sendeditcar()
  }
  onSubmit(ref:any)
  {
      this.us.updatecar(this.carobj).subscribe()
      this.toastr.success('Updated successfully')
      this.route.navigateByUrl("/admindashboard/allcarsaddedbyadmin")
  }
  Cancelupdate(){
    this.toastr.info('No changes are made')
     this.route.navigateByUrl("/admindashboard/allcarsaddedbyadmin")

  }

}
