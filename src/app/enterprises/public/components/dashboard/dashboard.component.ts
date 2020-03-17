import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { DashboardService } from './services/dashboard.service';
import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  closeListOpenSingle(closeList: Array<string>, open: string) {
    this.modalService.closeListOpenSingle(closeList, open);
  }

  constructor(private modalService: ModalService, private _dashboardService: DashboardService, private _loginService: LoginService) { }

  ngOnInit() {

    if(this._loginService.changePassword){

      
    setTimeout(() => {
      this.closeListOpenSingle([''], 'enterprises__dashboard__welcome-modal')
    }, 1000);

    }





    
  }



}
