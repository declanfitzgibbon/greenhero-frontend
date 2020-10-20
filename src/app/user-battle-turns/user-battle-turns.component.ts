import { Component, Input, OnInit } from '@angular/core';
import { BattleTurnService } from '../battle-turn.service';

@Component({
  selector: 'app-user-battle-turns',
  templateUrl: './user-battle-turns.component.html',
  styleUrls: ['./user-battle-turns.component.css']
})
export class UserBattleTurnsComponent implements OnInit {

  @Input() participants: Array<{
    src: string,
    name: string,
    id: string
  }>
  userId: string = '1';
  constructor(private turnService: BattleTurnService) { 
    this.participants = [
      {
        src: "/assets/elf-avatar.png",
        name: "Wenhan",
        id: "1"
      },
      {
        src: "/assets/elf-avatar.png",
        name: "Declan",
        id: "2"
      },
      {
        src: "/assets/elf-avatar.png",
        name: "Feng Rui",
        id: "3"
      },
      {
        src: "/assets/elf-avatar.png",
        name: "Elijah",
        id: "4"
      }
    ]
  }

  ngOnInit(): void {
    const turns = this.turnService.getTurns();

    this.sortParticipants(turns);

    this.turnService.turnChange.subscribe((turnsEmmitted) => this.sortParticipants(turnsEmmitted));
  }

  sortParticipants(turns: Array<string>) {
    this.participants.sort((a, b) => {
      return turns.indexOf(a.id) - turns.indexOf(b.id); 
    });
  }

}
