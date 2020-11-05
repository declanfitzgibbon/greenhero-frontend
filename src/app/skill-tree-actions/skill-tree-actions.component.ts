import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-skill-tree-actions',
  templateUrl: './skill-tree-actions.component.html',
  styleUrls: ['./skill-tree-actions.component.css']
})
export class SkillTreeActionsComponent implements OnInit {

  @Input() actions: Array<{ name: string, code: string, disabled: boolean }>;
  @Input() coinsToSpend: number;
  @Input() coinsHad: number;
  @Output() actionChosen: EventEmitter<{code: string}> = new EventEmitter();
  isMyTurn: boolean;


  constructor() {
    this.actions = [
      {
        code: "confirm",
        name: "Confirm",
        disabled: true
      }
    ]
   }

  ngOnInit(): void {
  }

  actionClicked(action: { name: string, code: string }) {
    this.actionChosen.emit({code: action.code});
  }

}
