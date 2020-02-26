import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-message-payment',
  templateUrl: './message-payment.component.html',
  styleUrls: ['./message-payment.component.scss']
})
export class MessagePaymentComponent implements OnInit {

  @Input() icon : string;
  @Input() color : string;
  
  constructor() { }

  ngOnInit() {
  }

}
