import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms: Array<{
    id: string,
    roomName: string
  }>;

  form: FormGroup;

  constructor(private fb: FormBuilder, private eventService: EventService) { }

  ngOnInit(): void {
    this.rooms = [
      {
        id: "1",
        roomName: "Room 101"
      },
      {
        id: "2",
        roomName: "Room 102"
      },
      {
        id: "3",
        roomName: "Room 103"
      },
      {
        id: "4",
        roomName: "Room 104"
      },
      {
        id: "5",
        roomName: "Room 105"
      }
    ];

    this.form = this.fb.group({
      room_id: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required]
    })
  }

  createEvent() {
    const events = this.eventService.getEvents();
    this.eventService.addEvent({
      Id: (events.dataSource as Object[]).length + 1,
      StartTime: new Date(this.form.controls['start_date'].value),
      EndTime: new Date(this.form.controls['end_date'].value),
      room_id: this.form.controls['room_id'].value,
      room_name: this.rooms.find((room) => room.id === this.form.controls['room_id'].value).roomName,
      user_id: "1",
      user_name: "Wenhan Yang"
    });
    
  }

}
