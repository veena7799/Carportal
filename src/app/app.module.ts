import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FindacarComponent } from './findacar/findacar.component';
import { BookacarComponent } from './bookacar/bookacar.component';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { FooterComponent } from './footer/footer.component'
import {AuthorizationService} from './authorization.service';
import { DrivingtipsComponent } from './drivingtips/drivingtips.component';
import { MaintenancetipsComponent } from './maintenancetips/maintenancetips.component';
import { AllcarComponent } from './allcar/allcar.component';
import { AllcarsaddedbyadminComponent } from './allcarsaddedbyadmin/allcarsaddedbyadmin.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EditcarComponent } from './editcar/editcar.component';
import { WarrantyComponent } from './warranty/warranty.component';
import { RoadsideassistanceComponent } from './roadsideassistance/roadsideassistance.component';
import { UsercartComponent } from './usercart/usercart.component';
import { CarfilterPipe } from './carfilter.pipe';
import { SpecificationsComponent } from './specifications/specifications.component';
import { HatchbackComponent } from './hatchback/hatchback.component';
import { SuvComponent } from './suv/suv.component';
import { SedanComponent } from './sedan/sedan.component';
import { AllmodelsComponent } from './allmodels/allmodels.component';
import { PaymentComponent } from './payment/payment.component';
import { UseraddressComponent } from './useraddress/useraddress.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FindacarComponent,
    BookacarComponent,
    ServicesComponent,
    AboutusComponent,
    RegisterComponent,
    UserdashboardComponent,
    FooterComponent,
    DrivingtipsComponent,
    MaintenancetipsComponent,
    AllcarComponent,
    AllcarsaddedbyadminComponent,
    AdminComponent,
    AdmindashboardComponent,
    EditcarComponent,
    WarrantyComponent,
    RoadsideassistanceComponent,
    UsercartComponent,
    CarfilterPipe,
    SpecificationsComponent,
    HatchbackComponent,
    SuvComponent,
    SedanComponent,
    AllmodelsComponent,
    PaymentComponent,
    UseraddressComponent,
    UserprofileComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:1000,
      progressBar:true
    }
    )


  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthorizationService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
