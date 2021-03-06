import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    //get token from local storage
    let token = localStorage.getItem("token")

    //if token doesn't exists
    if(token == undefined){
      
      return next.handle(req)

    }

    //if token exists
    else{
      //Add it to header
      let modifiedToken = req.clone({
        headers : req.headers.set("Authorisation","Bearer "+token)
      })

      //handover to next
      return next.handle(modifiedToken)
    }
    
  }
}
