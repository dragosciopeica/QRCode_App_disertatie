import { Component, OnInit } from '@angular/core';
import {OrderPService} from '../order-p.service'
import { Router } from '@angular/router';
import { FB_Order } from '../models/fb_orders'
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pay-done',
  templateUrl: './pay-done.component.html',
  styleUrls: ['./pay-done.component.scss']
})
export class PayDoneComponent implements OnInit {




  constructor(private router: Router,private service:OrderPService, private route: ActivatedRoute) {

    
  }

payer_id: string;
order_id: string
token_id: any;   
done_or_not: boolean;
approve: FB_Order;



//Back function
gback(){  this.router.navigate(['/members']);  }


  ngOnInit(): void {

    this.order_id = this.route.snapshot.queryParamMap.get('token');
    this.payer_id = this.route.snapshot.queryParamMap.get('PayerID');
    


    this.Approve_payDone();
    
  
  }


  // Functia pentru aprobarea tranzactiei!
  async Approve_payDone(){

    await this.service.ApproveOrder(this.order_id).then( res => {
      this.approve = res;    
      console.log(this.approve); 
      
    })

    

    this.done_or_not = true;
    // this.isDoneVisible.next(!this.done_or_not);
   
    // console.log("done este egal:", this.done_or_not); 
    // doar cand functia e gata, iau statusul comenzii.
    console.log('Statsul comenzii este:',this.approve.status);

  }

  // tine minte!
  get isDoneF(): boolean {
    return this.done_or_not;
}

 


}
