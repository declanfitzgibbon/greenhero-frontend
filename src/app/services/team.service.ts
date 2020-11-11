import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Node, Ability, AugmentationType, NodeType } from '../models/node';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teams: Array<Team> = [
    /*
    {
      event_id: "1",
      _id: "100",
      applications: [],
      avatar: '/assets/team-avatar-1.png',
      name: 'Team 1',
      teamLeader: {
        _id: '100',
        avatar: "/assets/elf-avatar.png",
        characterName: "My Elf Mage",
        user_id: '48',
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
        armor: 100,
        attack: 20,
        healing_factor: 100,
        health: 400
      },
      teamMembers: [
        {
          _id: '30',
          avatar: "/assets/elf-avatar.png",
          characterName: "My Elf Mage",
          user_id: '43',
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
          armor: 100,
          attack: 20,
          healing_factor: 100,
          health: 400
        }
      ],
      turnOrder: ["100", "30"]
    },
    {
      event_id: "1",
      _id: "101",
      applications: [],
      avatar: '/assets/team-avatar-1.png',
      name: 'Team 2',
      teamLeader: {
        _id: '101',
        avatar: "/assets/elf-avatar.png",
        characterName: "My Elf Mage",
        user_id: '24',
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
        armor: 100,
        attack: 20,
        healing_factor: 100,
        health: 400
      },
      teamMembers: [
        {
          _id: '46',
          avatar: "/assets/elf-avatar.png",
          characterName: "My Elf Mage",
          user_id: '67',
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
          armor: 100,
          attack: 20,
          healing_factor: 100,
          health: 400
        },
        {
          _id: '1',
          avatar: "/assets/elf-avatar.png",
          characterName: "My Elf Mage",
          user_id: '52',
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
          armor: 100,
          attack: 20,
          healing_factor: 100,
          health: 400
        }
      ],
      turnOrder: ["101", "46", "1"]
    },
    {
      event_id: "2",
      _id: "101",
      applications: [],
      avatar: '/assets/team-avatar-1.png',
      name: 'Team 3',
      teamLeader: {
        _id: '101',
        avatar: "/assets/elf-avatar.png",
        characterName: "My Elf Mage",
        user_id: '89',
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
        armor: 100,
        attack: 20,
        healing_factor: 100,
        health: 400
      },
      teamMembers: [
        {
          _id: '1',
          avatar: "/assets/elf-avatar.png",
          characterName: "My Elf Mage",
          user_id: '21',
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
          armor: 100,
          attack: 20,
          healing_factor: 100,
          health: 400
        },
        {
          _id: '2',
          avatar: "/assets/elf-avatar.png",
          characterName: "My Elf Mage",
          user_id: '51',
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
          armor: 100,
          attack: 20,
          healing_factor: 100,
          health: 400
        }
      ],
      turnOrder: ["101", "2", "1"]
    }
    */
  ];

  constructor(private http: HttpClient) { }

  async getPlayerTeamForEvent(event_id: string, user_id: string) {
    //return this.teams.find((team) => team.event_id === event_id && (team.teamLeader.user_id === user_id || team.teamMembers.some((member) => member.user_id === user_id)));
    const teams = await this.http.get<Team>("http://localhost:8080/Team/getTeamByEventIdAndUserId?event_id="+encodeURIComponent(event_id)+
                                                   "&user_id="+encodeURIComponent(user_id)).toPromise();
    return teams[0];
  }


  async addTeam(team: Team) {
    team.teamLeader = (team.teamLeader._id as any);
    for (var i=0;i<team.teamMembers.length;i++) {
      team.teamMembers[i] = (team.teamMembers[i] as any);
    }
    //this.teams.push(team);
    await this.http.post('http://localhost:8080/Team/', {...team}).toPromise();
  }

  async saveTeam(team_id: string, team: Team) {
    //this.teams[this.teams.findIndex((team) => team._id === team_id)] = team;
    team.teamLeader = (team.teamLeader._id as any);
    for (var i=0;i<team.teamMembers.length;i++) {
      team.teamMembers[i] = (team.teamMembers[i] as any);
    }
    await this.http.put('http://localhost:8080/Team/modifyTeamById?_id='+encodeURIComponent(team_id),{...team}).toPromise();
  }

  searchTeams(event_id: string, name?: string) {
    //return this.teams.filter((team) => name ? ( team.event_id === event_id && team.name.toLowerCase().includes(name.toLowerCase())) : (team.event_id === event_id) )
    return this.http.get<Array<Team>>('http://localhost:8080/Team/getTeamByEventIdAndTeamName?event_id='+encodeURIComponent(event_id)+'&teamName='+encodeURIComponent(name)).toPromise();
  }

}
