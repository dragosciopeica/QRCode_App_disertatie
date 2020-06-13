import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { Router } from '@angular/router';
import { OrderPService } from '../order-p.service';



declare var paypal;

@Component({
  selector: 'app-rmoney',
  templateUrl: './rmoney.component.html',
  styleUrls: ['./rmoney.component.scss']
})
export class RmoneyComponent implements AfterViewInit {

  @ViewChild('paypal', {static: false}) paypalElement: ElementRef;

qrData = null;
createdCode = null;


  constructor(private router: Router, private service: OrderPService) { 

    
  }


  ngAfterViewInit() {

    paypal    
    .Buttons({

      style: {
        color:  'black',
        shape:  'pill',
        label:  'pay',
        height: 40
    },

      createOrder: (data, actions) =>{
        return actions.order.create({
          purchase_units: [
            {
              
              amount: {
                currency_code: 'USD',
                value: Number(this.qrData)
              }
            }
          ]
        });
      },
    onApprove: async (data, actions)  => {
        const order = await actions.order.capture();      
        console.log(order);
    },
  onError: err => {
    console.log(err);
  }   
  })
  .render(this.paypalElement.nativeElement);

  


  
  
  this.service.sendPostRequest();


  }

  ngOnInit(): void {
   
    
  }



createCode(){
this.createdCode = this.qrData;

}

gback(){

  this.router.navigate(['/members']);

}

}
