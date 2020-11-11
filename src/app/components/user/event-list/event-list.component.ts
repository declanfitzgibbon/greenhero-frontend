import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from '../../../models/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  loading: boolean;
  events: Array<Event> = [];

  constructor(private eventService: EventService) { }

  async ngOnInit() {
    this.loading = true;
    this.events = await this.eventService.getEvents();
    this.loading = false;
  }

}
