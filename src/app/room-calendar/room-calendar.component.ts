import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';



@Component({
    selector: 'app-room-calendar',
    templateUrl: './room-calendar.component.html',
    styleUrls: ['./room-calendar.component.scss']
})
export class RoomCalendarComponent implements OnInit {

  public loading: boolean;
  public currentDate: Date = new Date();
  public newViewMode: View = 'Week';
  public allowDragAndDrop: boolean = false;
  public startHour: string = "9:00";
  public endHour: string = "18:00";
  public firstDay: number = 1;
  public showWeekend: boolean = false;
  
  events: EventSettingsModel;
  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.events = this.eventService.getEvents();
      this.loading = false;
    }, 2000);
    this.eventService.eventEmitter.subscribe(() => this.ngOnInit());
  }

  eventClicked(event) {
    console.log(event);
    
  }

}
