import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BookacarComponent } from './bookacar/bookacar.component';
import { FindacarComponent } from './findacar/findacar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import {FooterComponent} from './footer/footer.component'
import { DrivingtipsComponent } from './drivingtips/drivingtips.component';
import { MaintenancetipsComponent } from './maintenancetips/maintenancetips.component';
import { EditcarComponent } from './editcar/editcar.component';
import { AllcarComponent } from './allcar/allcar.component';
import { AllcarsaddedbyadminComponent } from './allcarsaddedbyadmin/allcarsaddedbyadmin.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { WarrantyComponent } from './warranty/warranty.component';
import { RoadsideassistanceComponent } from './roadsideassistance/roadsideassistance.component';
import { UsercartComponent } from './usercart/usercart.component';
import { SpecificationsComponent } from './specifications/specifications.component';
import { HatchbackComponent } from './hatchback/hatchback.component';
import { SuvComponent } from './suv/suv.component';
import { SedanComponent } from './sedan/sedan.component';
import { AllmodelsComponent } from './allmodels/allmodels.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"findacar",component:FindacarComponent},
  {path:"userprofile",component:BookacarComponent},
  {path:"services",component:ServicesComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"userdashboard",component:UserdashboardComponent,
children:[
  {path:"allmodels",component:AllmodelsComponent},
  {path:"usercart",component:UsercartComponent},
  //{path:"home",component:HomeComponent},
  {path:"hatchback",component:HatchbackComponent},
  {path:"SUV",component:SuvComponent},
  {path:"Sedan",component:SedanComponent},
  {path:"payment",component:PaymentComponent},
  {path:"",redirectTo:"allmodels",pathMatch:"full"}
]},
  
    
{path:"admindashboard",component:AdmindashboardComponent,children
:[
  {path:"editcar",component:EditcarComponent},
  
  {path:"allcarsaddedbyadmin",component:AllcarsaddedbyadminComponent},
  {path:"admin",component:AdminComponent},
  {path:"",redirectTo:"allcarsaddedbyadmin",pathMatch:"full"}
]},
  //{path:"usercart",component:UsercartComponent},
 
  
  {path:"warranty",component:WarrantyComponent},
  
  {path:"allcar",component:AllcarComponent},
    {path:"drivingtips",component:DrivingtipsComponent},
    {path:"maintenance",component:MaintenancetipsComponent},
 
  {path:"roadsideassistance",component:RoadsideassistanceComponent},
  {path:"specifications/:carname",component:SpecificationsComponent},
  //{path:"hatchback",component:HatchbackComponent},
  
  {path:"footer",component:FooterComponent},
  
  {path:"",redirectTo:"home",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
