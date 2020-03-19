import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-questions-menu',
  templateUrl: './questions-menu.component.html',
  styleUrls: ['./questions-menu.component.scss']
})
export class QuestionsMenuComponent implements OnInit {

  @Input() i: any;
  @Input() selectedCat: any;
  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
