import { Component, OnInit, Input } from '@angular/core';
import { ConsumptionService } from 'src/app/services/consumption.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-consumption',
  templateUrl: './user-consumption.component.html',
  styleUrls: ['./user-consumption.component.css']
})
export class UserConsumptionComponent implements OnInit {

  timeFrame: number = 0;
  consumption_card: number = 0;
  allowance_card: number = 1;
  consumption: number;
  logIn: boolean = false;
  topAllowance: number = 100;
  allowance: number = 100;
  
  constructor(private consumptionService: ConsumptionService, private userService: UserService) { }

  async ngOnInit() {
    this.topAllowance = await this.consumptionService.getUserMonthAllowance(this.userService.user._id, new Date());
    this.allowance = await this.consumptionService.getTotalUserConsumptionForMonth(this.userService.user._id, new Date());

    this.consumptionService.getConsumptionObservable(this.userService.user._id).subscribe( (value: number) => this.switchOn(value) );
  }

  switchOn(amount: number) {
    this.consumption = amount;
    this.allowance -= amount;
  }

}
