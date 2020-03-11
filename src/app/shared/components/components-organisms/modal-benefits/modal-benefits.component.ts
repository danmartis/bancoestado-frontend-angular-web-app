import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { colors } from 'src/app/shared/utils/options';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-benefits',
  templateUrl: './modal-benefits.component.html',
  styleUrls: ['./modal-benefits.component.scss']
})
export class ModalBenefitsComponent implements OnInit {

  protected checkColor = colors.success;
  constructor(private modalService: ModalService,private router: Router) { }

  ngOnInit() {
  }

  closeListOpenSingle(closeList: Array<string>, open: string) { 
    this.modalService.closeListOpenSingle(closeList, open);
  }

  goToLogin(){
    this.closeListOpenSingle(['modal-benefits'],'');
    this.router.navigate(['login/login-se']);
  }

}
