import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-consumption-time-selector',
  templateUrl: './user-consumption-time-selector.component.html',
  styleUrls: ['./user-consumption-time-selector.component.css']
})
export class UserConsumptionTimeSelectorComponent implements OnInit {

  @Output() timeSelector: EventEmitter<number> = new EventEmitter();
  timeSelected: number = 0;


  constructor() { }

  ngOnInit(): void {
    this.timeSelector.emit(this.timeSelected);
  }

  choice(number: number) {
    console.log(number);
    
    this.timeSelector.emit(number);
    this.timeSelected = number;
  }

}
