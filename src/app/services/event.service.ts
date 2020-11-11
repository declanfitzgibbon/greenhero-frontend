import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventService {
  events: any;
  eventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
  }

  async getEvents() {
    return this.http.get<any>('http://localhost:8080/Event/').toPromise();
  }

  async getMostGrouped(timeFrame: number) {
    return [
      {
        name: 'Developers',
        value: (await this.http.get<{ total: number }>('http://localhost:8080/Team/getNumberOfPeople', {
          params: {
            profession: 'Developers'
          }
        }).toPromise()).total
      },
      {
        name: 'Lawyers',
        value: (await this.http.get<{ total: number }>('http://localhost:8080/Team/getNumberOfPeople', {
          params: {
            profession: 'Lawyers'
          }
        }).toPromise()).total
      },
      {
        name: 'Designers',
        value: (await this.http.get<{ total: number }>('http://localhost:8080/Team/getNumberOfPeople', {
          params: {
            profession: 'Designers'
          }
        }).toPromise()).total
      },
      {
        name: 'Engineers',
        value: (await this.http.get<{ total: number }>('http://localhost:8080/Team/getNumberOfPeople', {
          params: {
            profession: 'Engineers'
          }
        }).toPromise()).total
      }
    ];
  }

  async getTopCompleted(timeFrame: number) {
    let min_date: Date;
    switch (timeFrame) {
      case 0:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 1);
        return (await this.http.get<{ res: string }>('http://localhost:8080/Event/getTopEvent', {
          params: {
            date: min_date.toISOString()
          }
        }).toPromise()).res
        break;
      case 1:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 7);
        return (await this.http.get<{ res: string }>('http://localhost:8080/Event/getTopEvent', {
          params: {
            date: min_date.toISOString()
          }
        }).toPromise()).res
        break;
      case 2:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 28);
        return (await this.http.get<{ res: string }>('http://localhost:8080/Event/getTopEvent', {
          params: {
            date: min_date.toISOString()
          }
        }).toPromise()).res
        break;
      case 3:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 365);
        return (await this.http.get<{ res: string }>('http://localhost:8080/Event/getTopEvent', {
          params: {
            date: min_date.toISOString()
          }
        }).toPromise()).res
        break;
    }
  }

  async getPeopleInGroup(date: Date) {
    return (await this.http.get<{ total: number }>('http://localhost:8080/Team/getAllNumberOfPeople').toPromise()).total
  }

  async getCompletedEvents(date: Date) {
    date.setDate(date.getDate() - 28);
    return (await this.http.get<{ total: number }>('http://localhost:8080/Team/getNumberofCompletedEvent', {
      params: {
        date: date.toISOString()
      }
    }).toPromise()).total
  }
}