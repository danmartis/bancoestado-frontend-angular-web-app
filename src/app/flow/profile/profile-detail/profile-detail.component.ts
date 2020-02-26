import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  protected mode : 'view' | 'edit' = 'view';
  constructor() { }

  ngOnInit() {
  }

  toggleMode() {
    this.mode = this.mode === 'edit' ? 'view' : 'edit';
  }

}
