import { Component, OnInit } from '@angular/core';
import {OrderPService} from '../order-p.service'
import { Router } from '@angular/router';
import { FB_Order } from '../models/fb_orders'
import { RmoneyComponent } from '../rmoney/rmoney.component'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pay-done',
  templateUrl: './pay-done.component.html',
  styleUrls: ['./pay-done.component.scss']
})
export class PayDoneComponent implements OnInit {





  constructor(private router: Router,private service:OrderPService, private route: ActivatedRoute) {}

payer_id: string;
order_id: string
token_id: any;   
done_or_not: number = 0;
approve: FB_Order;

//Back function
gback(){  this.router.navigate(['/members']);  }


  ngOnInit(): void {

    this.order_id = this.route.snapshot.queryParamMap.get('token');
    console.log(this.order_id);

    this.payer_id = this.route.snapshot.queryParamMap.get('PayerID');
    console.log(this.payer_id)

    this.Approve_payDone();

  }

  async Approve_payDone(){

    await this.service.ApproveOrder(this.order_id).then( res => {
      this.approve = res;    
      console.log(this.approve); 
      this.done_or_not = 1;
    })
    console.log('Statsul comenzii este:',this.approve.status);
  }




}
