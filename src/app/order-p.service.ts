import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs"
import {Order} from '../app/models/Order'
import {FB_Order} from '../app/models/fb_orders'
import {LoginComponent}  from '../app/login/login.component'
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class OrderPService {

  
  user: LoginComponent;
  url: string = 'https://api.sandbox.paypal.com/v2/checkout/orders'  
  url2: string = 'https://api.sandbox.paypal.com/v2/checkout/orders/'  
  url2_a: string = '/capture'  
  url3: string = 'https://api.sandbox.paypal.com/v1/identity/oauth2/userinfo?schema=paypalv1.1' 

  static ngInjectableDef = undefined;

  constructor(private http: HttpClient, private firestore: AngularFirestore) { 

    
  }






  // folosit pentru a primi un link de tranzactie
 sendPostRequest(value: string):Promise<Order> {
    const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')        
        .set('Authorization', 'Bearer A21AAF8cgXiovmgj561VSEkvePrNbuuEpxxFWCg-iwju2kKr5lShG10J7YleEGXXwGoOMqWVNMsnC_00cjDTLWOOeOjkq-Eug');
        
      const body = {
      'intent': 'CAPTURE',
      'purchase_units': [ 
        {
          'amount': {
            'currency_code': 'USD',
            'value': value
          }
        }
      ],      
      'application_context': {
        
        'shipping_preference':'NO_SHIPPING',
        'user_action': 'PAY_NOW',
        'return_url': 'http://localhost:4200/paydone',
         
    },
    'order_request': [{
      'intent' : 'CAPTURE',
    }],
    
    }       
    return  this.http.post<Order>(this.url, body, { headers: headers }).toPromise();}  


  addinFirebase(data){
     {
      return new Promise<any>((resolve, reject) =>{
          this.firestore
              .collection("Orders")
              .add(data)
              .then(res => {}, err => reject(err));
      });
  }
  }

  ApproveOrder(order_id: string):Promise<FB_Order>{

        const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')        
        .set('Authorization', 'Bearer A21AAF8cgXiovmgj561VSEkvePrNbuuEpxxFWCg-iwju2kKr5lShG10J7YleEGXXwGoOMqWVNMsnC_00cjDTLWOOeOjkq-Eug');
        
        const body = { 
          'payer_id' : 'E49TR7ZFLVK4J',
        }
        
          return  this.http.post<FB_Order>(`${this.url2}${order_id}${this.url2_a}`, body, { headers: headers }).toPromise();
  }


  UserId(){

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')        
    .set('Authorization', 'Bearer A21AAF8cgXiovmgj561VSEkvePrNbuuEpxxFWCg-iwju2kKr5lShG10J7YleEGXXwGoOMqWVNMsnC_00cjDTLWOOeOjkq-Eug');
  
    
      return  this.http.get(this.url3, { headers: headers })

  }




  }





