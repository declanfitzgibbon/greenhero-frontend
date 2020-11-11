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

  async getTopCompleted(timeFrame: number) {
    let min_date: Date;
    switch(timeFrame) {
      case 0:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 1);
        return (await this.http.get<{ res: string }>('http://localhost:8080/Mission/getTopMission', {
          params: {
            date: min_date.toISOString()
          }
        }).toPromise()).res
        break;
      case 1:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 7);
        return (await this.http.get<{ res: string }>('http://localhost:8080/Mission/getTopMission', {
          params: {
            date: min_date.toISOString()
          }
        }).toPromise()).res
        break;
      case 2:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 28);
        return (await this.http.get<{ res: string }>('http://localhost:8080/Mission/getTopMission', {
          params: {
            date: min_date.toISOString()
          }
        }).toPromise()).res
        break;
      case 3:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 365);
        return (await this.http.get<{ res: string }>('http://localhost:8080/Mission/getTopMission', {
          params: {
            date: min_date.toISOString()
          }
        }).toPromise()).res
        break;
    }
  }
  
  async getMostCompleted(timeFrame: number) {
    let min_date: Date;
    switch(timeFrame) {
      case 0:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 1);
        return (await this.http.get<any>('http://localhost:8080/Mission/getCompletedMissionByType', {
          params: {
            date: min_date.toISOString()
          }
        }).toPromise())
        break;
      case 1:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 7);
        return (await this.http.get<any>('http://localhost:8080/Mission/getCompletedMissionByType', {
          params: {
            date: min_date.toISOString()
          }
        }).toPromise())
        break;
      case 2:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 28);
        return (await this.http.get<any>('http://localhost:8080/Mission/getCompletedMissionByType', {
          params: {
            date: min_date.toISOString()
          }
        }).toPromise())
        break;
      case 3:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 365);
        return (await this.http.get<any>('http://localhost:8080/Mission/getCompletedMissionByType', {
          params: {
            date: min_date.toISOString()
          }
        }).toPromise())
        break;
    }
  }

  async getMissionsCompleted(date: Date) {
    date.setDate(date.getDate() - 28);
    return (await this.http.get<{ total: number }>('http://localhost:8080/Mission/getNumberofCompletedMission', {
      params: {
        date: date.toISOString()
      }
    }).toPromise()).total
  }
}
