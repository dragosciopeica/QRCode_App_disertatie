import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, Subject, BehaviorSubject} from "rxjs"
import {Order} from '../app/models/Order'
import {FB_Order} from '../app/models/fb_orders'
import {LoginComponent}  from '../app/login/login.component'
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class OrderPService {

  isDone = false;  
  isDoneVisible: BehaviorSubject<boolean> ;
  
  user: LoginComponent;
  url: string = 'https://api.sandbox.paypal.com/v2/checkout/orders'  
  url2: string = 'https://api.sandbox.paypal.com/v2/checkout/orders/'  
  url2_a: string = '/capture'  
  url3: string = 'https://api.sandbox.paypal.com/v1/identity/oauth2/userinfo?schema=paypalv1.1' 
  url4: string = 'https://api.sandbox.paypal.com/v2/checkout/orders/' 

  static ngInjectableDef = undefined;

  constructor(private http: HttpClient, private firestore: AngularFirestore) { 

    this.isDoneVisible = new BehaviorSubject<boolean>(false);

    this.isDoneVisible.subscribe((value) => {
      this.isDone = value;
    })
   
    

  }

//   this.IsDone = done
// this.IsDoneVisible.next(this.isDone)

toggleisDone(done){
  this.isDone= done;
  this.isDoneVisible.next(this.isDone);
}

isDoneF():Observable<boolean> {
  return this.isDoneVisible.asObservable();
}





  // folosit pentru a primi un link de tranzactie
 sendPostRequest(value: string):Promise<Order> {
    const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')        
        .set('Authorization', 'Bearer A21AAFmfqLAjhmG74EnMAi7I_avaVGvDnI5Khkpbm7k9ZQ01gx5b0eY7C69D31Gs1dGU49Cplc429sl-Lr39SKA-g37eRZTDQ');
        
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
        // 'return_url': 'http://localhost:4200/paydone',
        'return_url': 'https://qrcodepay-9f4be.web.app/paydone',
         
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
        .set('Authorization', 'Bearer A21AAFmfqLAjhmG74EnMAi7I_avaVGvDnI5Khkpbm7k9ZQ01gx5b0eY7C69D31Gs1dGU49Cplc429sl-Lr39SKA-g37eRZTDQ');
        
        const body = { 
          'payer_id' : 'E49TR7ZFLVK4J',
        }
        
          return  this.http.post<FB_Order>(`${this.url2}${order_id}${this.url2_a}`, body, { headers: headers }).toPromise();
  }


  UserId(){

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')        
    .set('Authorization', 'Bearer A21AAFmfqLAjhmG74EnMAi7I_avaVGvDnI5Khkpbm7k9ZQ01gx5b0eY7C69D31Gs1dGU49Cplc429sl-Lr39SKA-g37eRZTDQ');
  
    
      return  this.http.get(this.url3, { headers: headers })

  }

  getOrderStatus(order_id: string):Promise<FB_Order>{

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')        
    .set('Authorization', 'Bearer A21AAFmfqLAjhmG74EnMAi7I_avaVGvDnI5Khkpbm7k9ZQ01gx5b0eY7C69D31Gs1dGU49Cplc429sl-Lr39SKA-g37eRZTDQ');
  
    
      return  this.http.get<FB_Order>(`${this.url4}${order_id}`, { headers: headers }).toPromise()

  }




  }





