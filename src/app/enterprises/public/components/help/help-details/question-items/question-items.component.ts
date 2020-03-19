import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-items',
  templateUrl: './question-items.component.html',
  styleUrls: ['./question-items.component.scss']
})
export class QuestionItemsComponent implements OnInit {

  @Input() i : number = 0;
  @Input() item : any;
  @Input() selectedCat : any;

  constructor() { }

  ngOnInit() {
  }

}
