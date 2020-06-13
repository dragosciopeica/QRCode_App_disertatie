import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs"



@Injectable({
  providedIn: 'root'
})
export class OrderPService {

  
  
  url: string = 'https://api.sandbox.paypal.com/v2/checkout/orders'  
  url_user_id: string = 'https://api.sandbox.paypal.com/v1/identity/oauth2/userinfo?schema=paypalv1.1'  
  static ngInjectableDef = undefined;

  constructor(private http: HttpClient) { }






  // folosit pentru a primi un link de tranzactie
  sendPostRequest(value: string) {

    const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')        
        .set('Authorization', 'Bearer A21AAFw5_M2kr57cJ6EAOAHXzHvLqpBMU9xpVvIWBMfhWZZVdDXqhV2JVYOdbA26Hs7vjZijvOf0UwZYXsRskkcLyA19HYi8Q');        

    const body = {
      intent: 'CAPTURE',
      'purchase_units': [ 
        {
          'amount': {
            'currency_code': 'USD',
            'value': value
          }
        }
      ]
        
    }

    return this.http
               .post(this.url, body, { headers: headers });

              //  .subscribe(res => {
              //     console.log("Post call success returned in body",res.id)
              //     this.id_sv = res.id;
              //   });
}       



// folosit pentru a lua user-ul
UserId() {

  const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')        
      .set('Authorization', 'Bearer A21AAFw5_M2kr57cJ6EAOAHXzHvLqpBMU9xpVvIWBMfhWZZVdDXqhV2JVYOdbA26Hs7vjZijvOf0UwZYXsRskkcLyA19HYi8Q');        

  
  return this.http
             .get(this.url_user_id,{ headers: headers })
             .subscribe(res => console.log("Success user identity",res));
}       



}
