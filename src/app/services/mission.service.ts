import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor(private http: HttpClient) { }

  async getUserDailyMissions(user_id: string) {
    return (await this.http.get<any>('http://localhost:8080/Mission/getMissionByUserIdAndType', {
      params: {
        "user_id": user_id,
        "type": "daily"
      }
    }).toPromise())
  }
  
  async getUserWeeklyMissions(user_id: string) {
    return (await this.http.get<any>('http://localhost:8080/Mission/getMissionByUserIdAndType', {
      params: {
        "user_id": user_id,
        "type": "weekly"
      }
    }).toPromise())
  }
  
  async getUserMonthlyMissions(user_id: string) {
    return (await this.http.get<any>('http://localhost:8080/Mission/getMissionByUserIdAndType', {
      params: {
        "user_id": user_id,
        "type": "monthly"
      }
    }).toPromise())
  }

  async getMostCompleted(timeFrame: number) {
    let min_date: Date;
    switch(timeFrame) {
      case 0:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 1);
        return (await this.http.get<{ res: any }>('http://localhost:8080/Event/getTopEvent', {
          params: {
            date: min_date.toISOString()
          }
        }).toPromise()).res
        break;
      case 1:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 7);
        return (await this.http.get<{ res: any }>('http://localhost:8080/Event/getTopEvent', {
          params: {
            date: min_date.toISOString()
          }
        }).toPromise()).res
        break;
      case 2:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 28);
        return (await this.http.get<{ res: any }>('http://localhost:8080/Event/getTopEvent', {
          params: {
            date: min_date.toISOString()
          }
        }).toPromise()).res
        break;
      case 3:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 365);
        return (await this.http.get<{ res: any }>('http://localhost:8080/Event/getTopEvent', {
          params: {
            date: min_date.toISOString()
          }
        }).toPromise()).res
        break;
    }
  }
  
  async getTopCompleted(timeFrame: number) {
    let min_date: Date;
    switch(timeFrame) {
      case 0:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 1);
        return 'Water saving';
        break;
      case 1:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 7);
        return 'Water saving';
        break;
      case 2:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 28);
        return 'Water saving';
        break;
      case 3:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 365);
        return 'Water saving';
        break;
    }
  }

  async getMissionsCompleted(date: Date) {
    return 100;
  }
}
