import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  constructor() { }
  x=0;

private cartcount: BehaviorSubject<any>=new BehaviorSubject(this.x)

setCartcount(cartcount:any){
  console.log(cartcount)
       this.cartcount.next(cartcount)

}

getCartcount(){
  return this.cartcount.asObservable()
}
}
