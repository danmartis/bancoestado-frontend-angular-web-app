import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() questionOpen: any;
  @Input() q: any;

  selectedQuestion: boolean = false;
  
  constructor() { }
  
  ngOnInit() {
  }

  openQuestion(id){
    console.log(id);
    if(this.questionOpen === id){
      this.questionOpen = 0;
    } else {
      this.questionOpen = id
    }
  }
}
