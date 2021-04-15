import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bookacar',
  templateUrl: './bookacar.component.html',
  styleUrls: ['./bookacar.component.css']
})
export class BookacarComponent implements OnInit {

  username:any
  userobj:any=[]
  constructor(private us:UserserviceService, private route:Router, private toast:ToastrService) { }

  ngOnInit(): void {

    
}
}
