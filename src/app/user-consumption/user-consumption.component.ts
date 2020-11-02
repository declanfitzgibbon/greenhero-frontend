import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-consumption',
  templateUrl: './user-consumption.component.html',
  styleUrls: ['./user-consumption.component.css']
})
export class UserConsumptionComponent implements OnInit {

  timeFrame: number = 0;
  consumption_card: number = 0;
  allowance_card: number = 1;
  
  @Input() logIn: boolean = false;
  @Input() allowance: number = 100;
  @Input() consumption: number = 20;

  constructor() { }

  switchOn() {
    if (this.logIn) {
      this.allowance -= this.consumption;
      this.logIn = false;
    }
    else {
      this.logIn = true;
    }
  }

  ngOnInit(): void {
  }

}
