import { Component, EventEmitter, OnInit } from '@angular/core';
import { Ability, AugmentationType, NodeType, SkillTree } from '../skill-tree/skill-tree.component';
import { Team, TeamService } from '../team.service';
import { UserService } from '../user.service';

export interface Event {
  _id: string,
  name: string,
  description: string,
  src: string;
  date: Date;
  boss: Boss;
}

export interface Boss {
  _id: string;
  health: number;
  defense: number;
  attack: number;
  healing_factor: number;
  name: string;
  description: string;
  avatar: string;
}

@Component({
  selector: 'app-user-event-first-page',
  templateUrl: './user-event-first-page.component.html',
  styleUrls: ['./user-event-first-page.component.css']
})
export class UserEventFirstPageComponent implements OnInit {

  selected: string;
  events: Array<Event> = [
    {
      _id: "1",
      description: "Lorem Ipsum",
      name: "Energy Saver",
      src: "/assets/event-image-1.png",
      date: new Date(),
      boss: {
        _id: "1",
        name: "Energy Lich",
        avatar: '/assets/enemy-example.png',
        description: "LOREM IPSUM!!!!!!",
        defense: 200,
        attack: 130,
        healing_factor: 20,
        health: 2000
      }
    },
    {
      _id: "2",
      description: "Lorem Ipsum",
      name: "Water Saver",
      src: "/assets/event-image-2.png",
      date: new Date(),
      boss: {
        _id: "2",
        name: "Water Lich",
        avatar: '/assets/enemy-example.png',
        description: "LOREM IPSUM!!!!!!",
        defense: 200,
        attack: 130,
        healing_factor: 20,
        health: 2000
      }
    }
  ];
  createIntention: boolean;
  searchIntention: boolean;
  user = {_id: '1'};

  loading: boolean;
  selectedEvent: Event;
  currentTeam: Team;

  constructor(private teamService: TeamService, private userService: UserService) { }

  ngOnInit(): void {
    this.loading = true;
    this.selected = this.events[0]._id;
    this.selectedEvent = this.events[0];
    this.currentTeam = this.teamService.getPlayerTeamForEvent(this.user._id, this.selectedEvent._id);
    this.loading = false;
  }

  newEventSelected() {
    this.loading = true;
    this.selectedEvent = this.events.find((event) => event._id === this.selected);

    this.currentTeam = this.teamService.getPlayerTeamForEvent(this.user._id, this.selectedEvent._id);
    
    this.loading = false;
  }

  teamCreated(id: string, team: Team) {
    this.teamService.addTeam(team);
    this.currentTeam = team;
    this.searchIntention = false;
    this.createIntention = false;
  }

}
