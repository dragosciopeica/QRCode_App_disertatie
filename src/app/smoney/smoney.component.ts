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
export class SmoneyComponent implements AfterViewInit, OnInit {

@ViewChild('paypal', {static: false}) paypalElement: ElementRef;



qrResultString: string;
onlyOnceP: boolean = true;
onlyOnce: boolean = false;
paidFor: boolean = false;



  constructor(private router: Router) {  }


  ngOnInit(): void {  }

  ngAfterViewInit() { }

  gback(){  this.router.navigate(['/members']); }

  

  clearResult(): void {
    this.qrResultString = null;
    
  }

  onCodeResult(resultString: string) {

        this.qrResultString = resultString;
        
   }

  }

  


