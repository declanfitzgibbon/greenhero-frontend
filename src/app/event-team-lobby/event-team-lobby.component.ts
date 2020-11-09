import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Character } from '../character.service';
import { EventApplicationsDialogComponent } from '../event-applications-dialog/event-applications-dialog.component';
import { Ability, AugmentationType, NodeType } from '../skill-tree/skill-tree.component';
import { Team, TeamService } from '../team.service';
import { UserService } from '../user.service';

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
    },
    {
      _id: "2",
      character: {
        _id: '3',
        avatar: "/assets/elf-avatar.png",
        name: "My Elf Mage 2",
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
    },
    {
      _id: "3",
      character: {
        _id: '4',
        avatar: "/assets/elf-avatar.png",
        name: "My Elf Mage 3",
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
    },
    {
      _id: "4",
      character: {
        _id: '5',
        avatar: "/assets/elf-avatar.png",
        name: "My Elf Mage 4",
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
    },
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
  user;
  loading: boolean;

  constructor(private router: Router, public dialog: MatDialog, private teamService: TeamService, private userService: UserService) { }

  ngOnInit(): void {
    this.loading = true;
    this.user = this.userService.user;
    console.log(this.user);
    
    this.loading = false;
  }

  navigateToEvent() {
    this.router.navigate(['user', 'battle']);
  }

  abandonTeam() {
  }

  openApplications() {
    const dialogRef = this.dialog.open(EventApplicationsDialogComponent, {
      width: '90%',
      data: { applications: this.applications }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.applications = [];
        for(let app of result.applications) {
          if(app.accepted) {
            this.team.teamMembers.push(app.character);
          } else if (!app.rejected) {
            this.applications.push(app);
          }
        }
        this.teamService.saveTeam(this.team._id, this.team);
      } else {
        this.applications.forEach((app) => { app.accepted = false; app.rejected = false });
      }
    });
  }
  membersMissing() {
    return this.team.teamMembers.length !== 3;
  }

}
