import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { Router } from '@angular/router';
import { OrderPService } from '../order-p.service';
import { AngularFirestore } from '@angular/fire/firestore'
import { Order } from '../../app/models/Order'

declare var paypal;

@Component({
  selector: 'app-rmoney',
  templateUrl: './rmoney.component.html',
  styleUrls: ['./rmoney.component.scss']
})



export class RmoneyComponent implements AfterViewInit {

  @ViewChild('paypal', {static: false}) paypalElement: ElementRef;

order: Order;
id: string;
qrData: string;
createdCode = null;
url_payment = 'https://www.sandbox.paypal.com/checkoutnow?token=';



  constructor(private router: Router, private service: OrderPService, private firestore: AngularFirestore) { 

  
  }


  ngAfterViewInit() {

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

  


  
  // this.service.sendPostRequest('11').then(res  => console.log(this.order = res));
  
  
  }


  // ngOnInit(): void {  }


// apasa() {
//   console.log(this.order.id);
// }

createCode(){

this.service.sendPostRequest(this.qrData).then(res  => {
  this.order = res;
  this.createdCode = `${this.url_payment}${this.order.id}`;
  });

}




gback(){

  this.router.navigate(['/members']);

}

}
