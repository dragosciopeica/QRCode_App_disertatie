import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { Router } from '@angular/router';
import { OrderPService } from '../order-p.service';
import { AngularFirestore } from '@angular/fire/firestore'
import { Order } from '../../app/models/Order'
import { FB_Order } from '../../app/models/fb_orders'

declare var paypal;

@Component({
  selector: 'app-rmoney',
  templateUrl: './rmoney.component.html',
  styleUrls: ['./rmoney.component.scss']
})



export class RmoneyComponent implements AfterViewInit {

  @ViewChild('paypal', {static: false}) paypalElement: ElementRef;

id_paypal: string = 'E49TR7ZFLVK4J';
ok: number;
order: Order;
id: string;
qrData: string;
createdCode = null;
url_payment = 'https://www.sandbox.paypal.com/checkoutnow?token=';



  constructor(private router: Router, private service: OrderPService, private firestore: AngularFirestore) {  }


  gback(){  this.router.navigate(['/members']);  }
  
  ngAfterViewInit() { this.service.UserId().subscribe(res=>console.log(res.payer_id)); }



  // cum fac sa am order id in afara '.then'-ului!!
  // async si await!
  async createCode(){

    await this.service.sendPostRequest(this.qrData).then(res  => {
      this.order = res;
      this.createdCode = `${this.url_payment}${res.id}`;
            
    })    
  
   this.service.addinFirebase(this.order);

    

  }; // end create 



      // this.service.ApproveOrder();      
      // this.service.UserId().subscribe(res=>console.log(res.payer_id));
      

ApproveOrder() {

  this.service.ApproveOrder().subscribe(res => console.log(res));



  
}



}


 

  

 
  

 
 

      // if(this.ok == 1) {
      //   this.firestore.collection("Orders").add(this.order);
      //   console.log(this.order);
      // }


      
     
    

    
    
    
    
    
  







  //   paypal    
  //   .Buttons({

  //     style: {
  //       color:  'black',
  //       shape:  'pill',
  //       label:  'pay',
  //       height: 40
  //   },

  //     createOrder: (data, actions) =>{
  //       return actions.order.create({
  //         purchase_units: [
  //           {
              
  //             amount: {
  //               currency_code: 'USD',
  //               value: Number(this.qrData)
  //             }
  //           }
  //         ]
  //       });
  //     },
  //   onApprove: async (data, actions)  => {
  //       const order = await actions.order.capture();      
  //       console.log(order);
  //   },
  // onError: err => {
  //   console.log(err);
  // }   
  // })
  // .render(this.paypalElement.nativeElement);

  
  //this.service.sendPostRequest2().subscribe(res => console.log(res));

  
  // this.service.sendPostRequest2 ('11').then(res  => console.log(this.order = res));
  
  
  


  // ngOnInit(): void {  }


// apasa() {
//   console.log(this.order.id);
// }


