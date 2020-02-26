import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bullet-step',
  templateUrl: './bullet-step.component.html',
  styleUrls: ['./bullet-step.component.scss']
})
export class BulletStepComponent implements OnInit {
  @Input() total : number = 3;
  @Input() current : any = 0;
  constructor() { }

  ngOnInit() {
  }

  getArray() {
    return new Array(this.total).fill(0).map((x, i)=> i);
  }

  isCurrent(n : number) {
    return n === Number.parseInt(this.current) ? 'current' : '';
  }

}
