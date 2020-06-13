import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderPService {

  id: string;
  url: string = 'https://api.sandbox.paypal.com/v2/checkout/orders'  
  static ngInjectableDef = undefined;

  constructor(private http: HttpClient) { }

  sendPostRequest() {

    const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')        
        .set('Authorization', 'Bearer A21AAFw5_M2kr57cJ6EAOAHXzHvLqpBMU9xpVvIWBMfhWZZVdDXqhV2JVYOdbA26Hs7vjZijvOf0UwZYXsRskkcLyA19HYi8Q');        

    const body = {
      intent: 'CAPTURE',
      'purchase_units': [ 
        {
          'amount': {
            'currency_code': 'USD',
            'value': '50'
          }
        }
      ]
        
    }

    return this.http
               .post(this.url, body, { headers: headers })
               .subscribe(res => console.log("Post call success returned in body",res));
}       

}
