import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  @Input() mode : 'view' | 'edit' = 'view';

  protected address : string = '';
  bornDateModel : any;

  constructor() { }

  ngOnInit() {
  }

  changeAdress(value) {
    this.address = value;
  }

}
