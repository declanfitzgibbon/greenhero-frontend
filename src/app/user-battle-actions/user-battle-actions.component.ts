import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BattleTurnService } from '../battle-turn.service';

@Component({
  selector: 'app-user-battle-actions',
  templateUrl: './user-battle-actions.component.html',
  styleUrls: ['./user-battle-actions.component.css']
})
export class UserBattleActionsComponent implements OnInit {

  @Input() actions: Array<{ name: string, code: string }>;
  @Input() targetChosen: { chosen: boolean, friend: boolean};
  @Input() turnId: string = '1';
  @Output() actionChosen: EventEmitter<{action: string, actionNumber: number}> = new EventEmitter();
  actionNumber: number = 0;
  isMyTurn: boolean;


  constructor(private turnService: BattleTurnService) {
    this.actions = [
      {
        code: "attack",
        name: "Attack"
      },
      {
        code: "heal",
        name: "Heal"
      },
    ]
   }

  ngOnInit(): void {
    this.isMyTurn = this.turnService.turns[0] === this.turnId;
    this.turnService.turnChange.subscribe((turns) => this.isMyTurn = turns[0] === this.turnId);
  }

  actionClicked(action: { name: string, code: string }) {
    this.actionNumber++;
    this.actionChosen.emit({action: action.code, actionNumber: this.actionNumber});
    this.targetChosen = null;
    setTimeout(() => {
      this.turnService.nextTurn();
      console.log(this.targetChosen);
      
    }, 1000);
  }

}
