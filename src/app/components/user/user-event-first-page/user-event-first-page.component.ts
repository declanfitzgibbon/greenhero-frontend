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
  user;

  loading: boolean;
  selectedEvent: Event;
  currentTeam: Team;

  constructor(private teamService: TeamService, private userService: UserService, private eventService: EventService) { }

  async ngOnInit() {
    this.loading = true;
    this.user = this.userService.user;
    this.events = await this.eventService.getEvents();
    this.selected = this.events[0]._id;
    this.selectedEvent = this.events[0];
    this.currentTeam = await this.teamService.getPlayerTeamForEvent(this.selectedEvent._id,this.user._id);
    
    this.loading = false;
  }

  async newEventSelected() {
    this.loading = true;
    this.selectedEvent = this.events.find((event) => event._id === this.selected);

    this.currentTeam = await this.teamService.getPlayerTeamForEvent(this.selectedEvent._id, this.user._id);
    
    this.loading = false;
  }

  teamCreated(id: string, team: Team) {
    this.ngOnInit();
  }

}
