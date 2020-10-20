import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-battle',
  templateUrl: './user-battle.component.html',
  styleUrls: ['./user-battle.component.css']
})
export class UserBattleComponent implements OnInit {

  target: {chosen: boolean, friend: boolean};
  turnId: string = '1';
  action: { action: string, actionNumber: number };

  constructor() { }

  ngOnInit(): void {
  }

  setTarget(target) {
    this.target = target;
    console.log(target);
    
  }

  setAction(action) {
    this.action = action;
  }

}
