import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  constructor() { }

  async getUserDailyMissions(user_id: string) {
    return [
      {
        title: 'Gather energy',
        description: 'Use a power station with the brightness set to 60% maximum for 2 hours',
        goal: 2,
        reward: 20,
        value: 0.8,
        image: "/assets/lightning-icon.png",
        deleted: false
      },
      {
        title: 'Reduce sources',
        description: 'Use an outlet for a max amount of 30 minutes 3 times today',
        goal: 3,
        reward: 10,
        value: 3,
        image: "/assets/outlet-icon.png",
        deleted: false
      }
    ]
  }
  
  async getUserWeeklyMissions(user_id: string) {
    return [
      {
        title: 'Gather energy',
        description: 'Use a power station with the brightness set to 60% maximum for 2 hours',
        goal: 2,
        reward: 20,
        value: 0.8,
        image: "/assets/lightning-icon.png",
        deleted: false
      },
      {
        title: 'Reduce sources',
        description: 'Use an outlet for a max amount of 30 minutes 3 times today',
        goal: 3,
        reward: 10,
        value: 3,
        image: "/assets/outlet-icon.png",
        deleted: false
      }
    ]
  }
  
  async getUserMonthlyMissions(user_id: string) {
    return [
      {
        title: 'Gather energy',
        description: 'Use a power station with the brightness set to 60% maximum for 2 hours',
        goal: 2,
        reward: 20,
        value: 0.8,
        image: "/assets/lightning-icon.png",
        deleted: false
      },
      {
        title: 'Reduce sources',
        description: 'Use an outlet for a max amount of 30 minutes 3 times today',
        goal: 3,
        reward: 10,
        value: 3,
        image: "/assets/outlet-icon.png",
        deleted: false
      }
    ]
  }

  async getMostCompleted(timeFrame: number) {
    let min_date: Date;
    switch(timeFrame) {
      case 0:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 1);
        return [
              {
                name: 'Water saving',
                value: 100
              },
              {
                name: 'Electricity',
                value: 150
              },
              {
                name: 'Aircondition',
                value: 80
              }
            ];
        break;
      case 1:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 7);
        return [
              {
                name: 'Water saving',
                value: 100
              },
              {
                name: 'Electricity',
                value: 150
              },
              {
                name: 'Aircondition',
                value: 80
              }
            ];
        break;
      case 2:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 28);
        return [
              {
                name: 'Water saving',
                value: 100
              },
              {
                name: 'Electricity',
                value: 150
              },
              {
                name: 'Aircondition',
                value: 80
              }
            ];
        break;
      case 3:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 365);
        return [
              {
                name: 'Water saving',
                value: 100
              },
              {
                name: 'Electricity',
                value: 150
              },
              {
                name: 'Aircondition',
                value: 80
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
