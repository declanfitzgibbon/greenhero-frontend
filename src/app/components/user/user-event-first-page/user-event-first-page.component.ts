import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { Event } from 'src/app/models/event';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-user-event-first-page',
  templateUrl: './user-event-first-page.component.html',
  styleUrls: ['./user-event-first-page.component.css']
})
export class UserEventFirstPageComponent implements OnInit {

  selected: string;
  events: Array<Event>;
  createIntention: boolean;
  searchIntention: boolean;
  user = {_id: '1'};

  loading: boolean;
  selectedEvent: Event;
  currentTeam: Team;

  constructor(private teamService: TeamService, private userService: UserService, private eventService: EventService) { }

  async ngOnInit() {
    this.loading = true;
    this.events = await this.eventService.getEvents();
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
