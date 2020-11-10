import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class EventService {
    events: any;
    eventEmitter: EventEmitter<any> = new EventEmitter();

    constructor() {
        this.events = [{
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
        }];
    }

    getEvents(): any {
        return this.events;
    }
    
    addEvent(event) {
        (this.events.dataSource as Object[]).push(event);
        this.eventEmitter.emit();
    }

    async getMostGrouped(timeFrame: number) {
        let min_date: Date;
        switch(timeFrame) {
          case 0:
            min_date = new Date();
            min_date.setDate(min_date.getDate() - 1);
            return [
              {
                name: 'Developers',
                value: 100
              },
              {
                name: 'Lawyers',
                value: 50
              },
              {
                name: 'Designers',
                value: 80
              },
              {
                name: 'Engineers',
                value: 120
              }
            ];
            break;
          case 1:
            min_date = new Date();
            min_date.setDate(min_date.getDate() - 7);
            return [
              {
                name: 'Developers',
                value: 100
              },
              {
                name: 'Lawyers',
                value: 50
              },
              {
                name: 'Designers',
                value: 80
              },
              {
                name: 'Engineers',
                value: 120
              }
            ];
            break;
          case 2:
            min_date = new Date();
            min_date.setDate(min_date.getDate() - 28);
            return [
                {
                  name: 'Developers',
                  value: 100
                },
                {
                  name: 'Lawyers',
                  value: 50
                },
                {
                  name: 'Designers',
                  value: 80
                },
                {
                  name: 'Engineers',
                  value: 120
                }
              ];
            break;
          case 3:
            min_date = new Date();
            min_date.setDate(min_date.getDate() - 365);
            return [
                {
                  name: 'Developers',
                  value: 100
                },
                {
                  name: 'Lawyers',
                  value: 50
                },
                {
                  name: 'Designers',
                  value: 80
                },
                {
                  name: 'Engineers',
                  value: 120
                }
              ];
            break;
        }
    }

    async getTopCompleted(timeFrame: number) {
        let min_date: Date;
        switch(timeFrame) {
          case 0:
            min_date = new Date();
            min_date.setDate(min_date.getDate() - 1);
            return 'Water leech';
            break;
          case 1:
            min_date = new Date();
            min_date.setDate(min_date.getDate() - 7);
            return 'Water leech';
            break;
          case 2:
            min_date = new Date();
            min_date.setDate(min_date.getDate() - 28);
            return 'Water leech';
            break;
          case 3:
            min_date = new Date();
            min_date.setDate(min_date.getDate() - 365);
            return 'Water leech';
            break;
        }
    }

    async getPeopleInGroup(date: Date) {
      return 231;
    }
    
    async getCompletedEvents(date: Date) {
      return 57;
    }
}