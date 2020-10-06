import { EventEmitter, Injectable } from '@angular/core';
import { EventSettingsModel} from '@syncfusion/ej2-angular-schedule';

@Injectable()
export class EventService {
    events: EventSettingsModel;
    eventEmitter: EventEmitter<any> = new EventEmitter();

    constructor() {
        this.events = {
            dataSource: [
                {
                    Id: 1,
                    Subject: 'Board Meeting',
                    StartTime: new Date(2020, 9, 8, 9, 0),
                    EndTime: new Date(2020, 9, 8, 11, 0),
                    room_id: "1",
                    room_name: "Room 101",
                    user_id: "1",
                    user_name: "Wenhan Yang"
                },
                {
                    Id: 2,
                    Subject: 'Training session on JSP',
                    StartTime: new Date(2020, 9, 8, 15, 0),
                    EndTime: new Date(2020, 9, 8, 17, 0),
                    room_id: "1",
                    room_name: "Room 101",
                    user_id: "1",
                    user_name: "Wenhan Yang"
                },
                {
                    Id: 3,
                    Subject: 'Sprint Planning with Team members',
                    StartTime: new Date(2020, 9, 8, 9, 30),
                    EndTime: new Date(2020, 9, 8, 11, 0),
                    room_id: "1",
                    room_name: "Room 101",
                    user_id: "1",
                    user_name: "Wenhan Yang"
                }
            ],
            template: `
            <div>
                <h3>\${room_name}</h3>
                <p>\${user_name}</p>
            </div>  
            `
        };
    }
    getEvents(): EventSettingsModel {
        return this.events;
    }
    addEvent(event) {
        (this.events.dataSource as Object[]).push(event);
        this.eventEmitter.emit();
    }
}