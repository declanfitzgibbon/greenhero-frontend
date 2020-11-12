import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-time-selector',
  templateUrl: './admin-time-selector.component.html',
  styleUrls: ['./admin-time-selector.component.css']
})
export class AdminTimeSelectorComponent implements OnInit {

  @Output() timeSelector: EventEmitter<number> = new EventEmitter();
  timeSelected: number = 0;


  constructor() { }

  ngOnInit(): void {
    this.timeSelector.emit(this.timeSelected);
  }

  choice(number: number) {
    this.timeSelector.emit(number);
    this.timeSelected = number;
  }

}
