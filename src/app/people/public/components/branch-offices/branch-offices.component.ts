import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-offices',
  templateUrl: './branch-offices.component.html',
  styleUrls: ['./branch-offices.component.scss']
})
export class BranchOfficesComponent implements OnInit {
  
  protected question : string = '';

  constructor() { }

  ngOnInit() {
  }

}
