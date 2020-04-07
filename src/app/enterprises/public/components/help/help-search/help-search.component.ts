import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-search',
  templateUrl: './help-search.component.html',
  styleUrls: ['./help-search.component.scss']
})
export class HelpSearchComponent implements OnInit {

  public question : string = '';

  constructor() { }

  ngOnInit() {
  }
  
  changeQuestion(question) {
    this.question = question;
  }

}
