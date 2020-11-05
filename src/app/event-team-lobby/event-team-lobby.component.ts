import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Character } from '../character.service';
import { EventApplicationsDialogComponent } from '../event-applications-dialog/event-applications-dialog.component';
import { Ability, AugmentationType, NodeType } from '../skill-tree/skill-tree.component';
import { Team } from '../team.service';

export interface Application {
  _id: string;
  team_id: string;
  user_id: string;
  character: Character;
  accepted: boolean;
  rejected: boolean;
}

@Component({
  selector: 'app-event-team-lobby',
  templateUrl: './event-team-lobby.component.html',
  styleUrls: ['./event-team-lobby.component.css']
})
export class EventTeamLobbyComponent implements OnInit {

  @Input() team: Team;
  applications: Array<Application> = [
    {
      _id: "1",
      character: {
        _id: '2',
        avatar: "/assets/elf-avatar.png",
        name: "My Elf Mage",
        user_id: '1',
        skillTree:  {
          _id: "1",
          class: "Mage",
          nodes: [
            {
              _id: "1",
              ability: Ability.attack,
              amount: 15,
              sons: [{
                _id: "2",
                ability: Ability.attack,
                amount: 15,
                type: NodeType.stat,
                x: 150,
                y: 180,
                augmentationType: AugmentationType.percentage,
                cost: 200,
                owned: true,
                sons: [{
                  _id: "3",
                  ability: Ability.attack,
                  amount: 15,
                  type: NodeType.stat,
                  x: 250,
                  y: 180,
                  sons: [{
                    _id: "4",
                    ability: Ability.attack,
                    amount: 15,
                    type: NodeType.stat,
                    x: 350,
                    y: 180,
                    sons: [],
                    augmentationType: AugmentationType.percentage,
                    cost: 200,
                    owned: true,
                    locked: true
                  }],
                  augmentationType: AugmentationType.percentage,
                  cost: 200,
                  owned: true,
                  locked: true
                }],
                locked: true
              }],
              type: NodeType.stat,
              x: 50,
              y: 180,
              augmentationType: AugmentationType.percentage,
              cost: 200,
              owned: true,
              locked: true
            }
          ]
        },
        defense: 100,
        attack: 20,
        heal_factor: 100,
        health: 400
      },
      team_id: "1",
      user_id: "2",
      accepted: false,
      rejected: false
    }
  ];

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  navigateToEvent() {
    this.router.navigate(['user', 'battle']);
  }

  abandonTeam() {
  }

  openApplications() {
    const dialogRef = this.dialog.open(EventApplicationsDialogComponent, {
      width: '50%',
      data: { applications: this.applications }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
