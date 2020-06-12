import { Component, OnInit, Input, HostListener, ElementRef, ViewChild, AfterViewInit, ViewRef} from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { Router } from '@angular/router';
import { AngularFireFunctions } from '@angular/fire/functions';



declare var paypal;

@Component({
  selector: 'app-smoney',
  templateUrl: './smoney.component.html',
  styleUrls: ['./smoney.component.scss']
})

// a fost afterViewInit
export class SmoneyComponent implements AfterViewInit {

@ViewChild('paypal', {static: false}) paypalElement: ElementRef;



qrResultString: number;
onlyOnceP: boolean = true;
onlyOnce: boolean = false;
paidFor: boolean = false;



  constructor(private router: Router) { }


  ngOnInit(): void {  


  
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
                value: 20
              }
            }
          ]
        });
      },
    onApprove: async (data, actions)  => {
        const order = await actions.order.capture();
        this.paidFor = true;
        this.onlyOnceP = false;
        console.log(order);
    },
  onError: err => {
    console.log(err);
  }   
  })
  .render(this.paypalElement.nativeElement);
  
  
  }

  

  clearResult(): void {
    this.qrResultString = null;
    this.onlyOnceP = false; 
    this.onlyOnce = false;     
  }

  onCodeResult(resultString: string) {

    if(this.onlyOnce == false){
    
    //set this bool to be true. Enter only once!    
    this.onlyOnce = true;
    this.onlyOnceP = true;
    // take the string from QRCode
    this.qrResultString = Number(resultString);
    
    // Make the paypal function appear
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
                value: this.qrResultString
              }
            }
          ]
        });
      },
    onApprove: async (data, actions)  => {
        const order = await actions.order.capture();
        this.paidFor = true;
        this.onlyOnceP = false;
        console.log(order);
    },
  onError: err => {
    console.log(err);
  }   
  })
  .render(this.paypalElement.nativeElement);
  
    }

  }

  gback(){

    this.router.navigate(['/members']);
  
  
  }

}
