import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor(private http: HttpClient) { }

  async getUserDailyMissions(user_id: string) {
    return (await this.http.get<any>('https://greenhero.herokuapp.com/Mission/getMissionByUserIdAndType', {
      params: {
        "user_id": user_id,
        "type": "daily"
      }
    }).toPromise())
  }
  
  async getUserWeeklyMissions(user_id: string) {
    return (await this.http.get<any>('https://greenhero.herokuapp.com/Mission/getMissionByUserIdAndType', {
      params: {
        "user_id": user_id,
        "type": "weekly"
      }
    }).toPromise())
  }
  
  async getUserMonthlyMissions(user_id: string) {
    return (await this.http.get<any>('https://greenhero.herokuapp.com/Mission/getMissionByUserIdAndType', {
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
        return (await this.http.get<{ res: string }>('https://greenhero.herokuapp.com/Mission/getTopMission', {
          params: {
            date: min_date.toISOString()
          }
        }).toPromise()).res
        break;
      case 1:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 7);
        return (await this.http.get<{ res: string }>('https://greenhero.herokuapp.com/Mission/getTopMission', {
          params: {
            date: min_date.toISOString()
          }
        }).toPromise()).res
        break;
      case 2:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 28);
        return (await this.http.get<{ res: string }>('https://greenhero.herokuapp.com/Mission/getTopMission', {
          params: {
            date: min_date.toISOString()
          }
        }).toPromise()).res
        break;
      case 3:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 365);
        return (await this.http.get<{ res: string }>('https://greenhero.herokuapp.com/Mission/getTopMission', {
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
        return (await this.http.get<any>('https://greenhero.herokuapp.com/Mission/getCompletedMissionByType', {
          params: {
            date: min_date.toISOString()
          }
        }).toPromise())
        break;
      case 1:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 7);
        return (await this.http.get<any>('https://greenhero.herokuapp.com/Mission/getCompletedMissionByType', {
          params: {
            date: min_date.toISOString()
          }
        }).toPromise())
        break;
      case 2:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 28);
        return (await this.http.get<any>('https://greenhero.herokuapp.com/Mission/getCompletedMissionByType', {
          params: {
            date: min_date.toISOString()
          }
        }).toPromise())
        break;
      case 3:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 365);
        return (await this.http.get<any>('https://greenhero.herokuapp.com/Mission/getCompletedMissionByType', {
          params: {
            date: min_date.toISOString()
          }
        }).toPromise())
        break;
    }
  }

  async getMissionsCompleted(date: Date) {
    date.setDate(date.getDate() - 28);
    return (await this.http.get<{ total: number }>('https://greenhero.herokuapp.com/Mission/getNumberofCompletedMission', {
      params: {
        date: date.toISOString()
      }
    }).toPromise()).total
  }

  async updateMission(mission: Mission) {
    return (await this.http.put<any>('https://greenhero.herokuapp.com/Mission', {
      ...mission
    }).toPromise())
  }
}
