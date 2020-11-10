import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumptionService {

  constructor() { }

  getConsumptionSummary(timeFrame: number) {
    let min_date: Date;
    switch(timeFrame) {
      case 0:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 1);
        return [
          {
            name: '5 hours ago',
            series: [
              {
                name: "You",
                value: 100
              },
              {
                name: "Profession average",
                value: 100
              }
            ]
          },
          {
            name: '4 hours ago',
            series: [
              {
                name: "You",
                value: 200
              },
              {
                name: "Profession average",
                value: 100
              }
            ]
          },
          {
            name: '3 hours ago',
            series: [
              {
                name: "You",
                value: 400
              },
              {
                name: "Profession average",
                value: 800
              }
            ]
          },
          {
            name: '2 hours ago',
            series: [
              {
                name: "You",
                value: 200
              },
              {
                name: "Profession average",
                value: 400
              }
            ]
          },
          {
            name: '1 hour ago',
            series: [
              {
                name: "You",
                value: 1000
              },
              {
                name: "Profession average",
                value: 600
              }
            ]
          }
        ];
        break;
      case 1:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 7);
        return [
          {
            name: '5 days ago',
            series: [
              {
                name: "You",
                value: 300
              },
              {
                name: "Profession average",
                value: 400
              }
            ]
          },
          {
            name: '4 days ago',
            series: [
              {
                name: "You",
                value: 300
              },
              {
                name: "Profession average",
                value: 200
              }
            ]
          },
          {
            name: '3 days ago',
            series: [
              {
                name: "You",
                value: 600
              },
              {
                name: "Profession average",
                value: 700
              }
            ]
          },
          {
            name: '2 days ago',
            series: [
              {
                name: "You",
                value: 300
              },
              {
                name: "Profession average",
                value: 200
              }
            ]
          },
          {
            name: 'Yesterday',
            series: [
              {
                name: "You",
                value: 900
              },
              {
                name: "Profession average",
                value: 800
              }
            ]
          }
        ];
        break;
      case 2:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 28);
        return  [
          {
            name: '5 weeks ago',
            series: [
              {
                name: "You",
                value: 600
              },
              {
                name: "Profession average",
                value: 500
              }
            ]
          },
          {
            name: '4 weeks ago',
            series: [
              {
                name: "You",
                value: 700
              },
              {
                name: "Profession average",
                value: 500
              }
            ]
          },
          {
            name: '3 weeks ago',
            series: [
              {
                name: "You",
                value: 600
              },
              {
                name: "Profession average",
                value: 200
              }
            ]
          },
          {
            name: '2 weeks ago',
            series: [
              {
                name: "You",
                value: 400
              },
              {
                name: "Profession average",
                value: 500
              }
            ]
          },
          {
            name: '1 week ago',
            series: [
              {
                name: "You",
                value: 800
              },
              {
                name: "Profession average",
                value: 200
              }
            ]
          }
        ];
        break;
      case 3:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 365);
        return [
          {
            name: '5 months ago',
            series: [
              {
                name: "You",
                value: 600
              },
              {
                name: "Profession average",
                value: 400
              }
            ]
          },
          {
            name: '4 months ago',
            series: [
              {
                name: "You",
                value: 400
              },
              {
                name: "Profession average",
                value: 700
              }
            ]
          },
          {
            name: '3 months ago',
            series: [
              {
                name: "You",
                value: 900
              },
              {
                name: "Profession average",
                value: 200
              }
            ]
          },
          {
            name: '2 months ago',
            series: [
              {
                name: "You",
                value: 600
              },
              {
                name: "Profession average",
                value: 300
              }
            ]
          },
          {
            name: 'Last month',
            series: [
              {
                name: "You",
                value: 1100
              },
              {
                name: "Profession average",
                value: 400
              }
            ]
          }
        ];
        break;
    }
  }

  getConsumptionByCategory(timeFrame: number) {
    let min_date: Date;
    switch(timeFrame) {
      case 0:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 1);
        return [
          {
            name: 'Stations',
            label: 'Stations',
            value: 300
          },
          {
            name: 'Light',
            label: 'Light',
            value: 100
          },
          {
            name: 'Heating',
            label: 'Heating',
            value: 100
          },
          {
            name: 'Outlets',
            label: 'Outlets',
            value: 50
          }
        ];
        break;
      case 1:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 7);
        return [
          {
            name: 'Stations',
            label: 'Stations',
            value: 400
          },
          {
            name: 'Light',
            label: 'Light',
            value: 100
          },
          {
            name: 'Heating',
            label: 'Heating',
            value: 600
          },
          {
            name: 'Outlets',
            label: 'Outlets',
            value: 700
          }
        ];
        break;
      case 2:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 28);
        return  [
          {
            name: 'Stations',
            label: 'Stations',
            value: 1100
          },
          {
            name: 'Light',
            label: 'Light',
            value: 700
          },
          {
            name: 'Heating',
            label: 'Heating',
            value: 500
          },
          {
            name: 'Outlets',
            label: 'Outlets',
            value: 400
          }
        ];
        break;
      case 3:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 365);
        return [
          {
            name: 'Stations',
            label: 'Stations',
            value: 1400
          },
          {
            name: 'Light',
            label: 'Light',
            value: 400
          },
          {
            name: 'Heating',
            label: 'Heating',
            value: 800
          },
          {
            name: 'Outlets',
            label: 'Outlets',
            value: 400
          }
        ];
        break;
    }
  }
  
  getUserConsumptionWithComparisson(user_id: string, timeFrame: number) {
    let min_date: Date;
    switch(timeFrame) {
      case 0:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 1);
        return [
          {
            name: '5 hours ago',
            series: [
              {
                name:"You",
                value: 100
              },
              {
                name: "Profession average",
                value: 100
              }
            ]
          },
          {
            name: '4 hours ago',
            series: [
              {
                name:"You",
                value: 200
              },
              {
                name: "Profession average",
                value: 100
              }
            ]
          },
          {
            name: '3 hours ago',
            series: [
              {
                name:"You",
                value: 400
              },
              {
                name: "Profession average",
                value: 800
              }
            ]
          },
          {
            name: '2 hours ago',
            series: [
              {
                name:"You",
                value: 200
              },
              {
                name: "Profession average",
                value: 400
              }
            ]
          },
          {
            name: '1 hour ago',
            series: [
              {
                name:"You",
                value: 1000
              },
              {
                name: "Profession average",
                value: 600
              }
            ]
          }
        ];
        break;
      case 1:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 7);
        return [
          {
            name: '5 days ago',
            series: [
              {
                name:"You",
                value: 100
              },
              {
                name: "Profession average",
                value: 100
              }
            ]
          },
          {
            name: '4 days ago',
            series: [
              {
                name:"You",
                value: 200
              },
              {
                name: "Profession average",
                value: 100
              }
            ]
          },
          {
            name: '3 days ago',
            series: [
              {
                name:"You",
                value: 400
              },
              {
                name: "Profession average",
                value: 800
              }
            ]
          },
          {
            name: '2 days ago',
            series: [
              {
                name:"You",
                value: 200
              },
              {
                name: "Profession average",
                value: 400
              }
            ]
          },
          {
            name: 'Yesterday',
            series: [
              {
                name:"You",
                value: 1000
              },
              {
                name: "Profession average",
                value: 600
              }
            ]
          }
        ];
        break;
      case 2:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 28);
        return  [
          {
            name: '5 weeks ago',
            series: [
              {
                name:"You",
                value: 100
              },
              {
                name: "Profession average",
                value: 100
              }
            ]
          },
          {
            name: '4 weeks ago',
            series: [
              {
                name:"You",
                value: 200
              },
              {
                name: "Profession average",
                value: 100
              }
            ]
          },
          {
            name: '3 weeks ago',
            series: [
              {
                name:"You",
                value: 400
              },
              {
                name: "Profession average",
                value: 800
              }
            ]
          },
          {
            name: '2 weeks ago',
            series: [
              {
                name:"You",
                value: 200
              },
              {
                name: "Profession average",
                value: 400
              }
            ]
          },
          {
            name: '1 week ago',
            series: [
              {
                name:"You",
                value: 1000
              },
              {
                name: "Profession average",
                value: 600
              }
            ]
          }
        ];
        break;
      case 3:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 365);
        return [
          {
            name: '5 months ago',
            series: [
              {
                name:"You",
                value: 100
              },
              {
                name: "Profession average",
                value: 100
              }
            ]
          },
          {
            name: '4 months ago',
            series: [
              {
                name:"You",
                value: 200
              },
              {
                name: "Profession average",
                value: 100
              }
            ]
          },
          {
            name: '3 months ago',
            series: [
              {
                name:"You",
                value: 400
              },
              {
                name: "Profession average",
                value: 800
              }
            ]
          },
          {
            name: '2 months ago',
            series: [
              {
                name:"You",
                value: 200
              },
              {
                name: "Profession average",
                value: 400
              }
            ]
          },
          {
            name: 'Last month',
            series: [
              {
                name:"You",
                value: 1000
              },
              {
                name: "Profession average",
                value: 600
              }
            ]
          }
        ];
        break;
    }
  }

  getConsumptionByProfession(timeFrame) {
    let min_date: Date;
    switch(timeFrame) {
      case 0:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 1);
        return [
          {
            name: 'Developers',
            label: 'Developers',
            value: 300
          },
          {
            name: 'Lawyers',
            label: 'Lawyers',
            value: 100
          },
          {
            name: 'Designers',
            label: 'Designers',
            value: 100
          },
          {
            name: 'Engineers',
            label: 'Engineers',
            value: 50
          }
        ];
        break;
      case 1:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 7);
        return [
          {
            name: 'Developers',
            label: 'Developers',
            value: 400
          },
          {
            name: 'Lawyers',
            label: 'Lawyers',
            value: 200
          },
          {
            name: 'Designers',
            label: 'Designers',
            value: 500
          },
          {
            name: 'Engineers',
            label: 'Engineers',
            value: 100
          }
        ];
        break;
      case 2:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 28);
        return  [
          {
            name: 'Developers',
            label: 'Developers',
            value: 600
          },
          {
            name: 'Lawyers',
            label: 'Lawyers',
            value: 200
          },
          {
            name: 'Designers',
            label: 'Designers',
            value: 300
          },
          {
            name: 'Engineers',
            label: 'Engineers',
            value: 400
          }
        ];
        break;
      case 3:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 365);
        return [
          {
            name: 'Developers',
            label: 'Developers',
            value: 20
          },
          {
            name: 'Lawyers',
            label: 'Lawyers',
            value: 100
          },
          {
            name: 'Designers',
            label: 'Designers',
            value: 300
          },
          {
            name: 'Engineers',
            label: 'Engineers',
            value: 300
          }
        ];
        break;
    }
  }

  getUserHighestCategory(user_id: string, timeFrame: number) {
    let min_date: Date;
    switch(timeFrame) {
      case 0:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 1);
        return 'Outlets';
        break;
      case 1:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 7);
        return 'Outlets';
        break;
      case 2:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 28);
        return 'Outlets';
        break;
      case 3:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 365);
        return 'Outlets';
        break;
    }
  }

  getUserHighestDay(user_id: string, timeFrame: number) {
    let min_date: Date;
    switch(timeFrame) {
      case 0:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 1);
        return 'Wednesday';
        break;
      case 1:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 7);
        return 'Wednesday';
        break;
      case 2:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 28);
        return 'Wednesday';
        break;
      case 3:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 365);
        return 'Wednesday';
        break;
    }
  }
  
  getUserCoinsSaved(user_id: string, timeFrame: number) {
    let min_date: Date;
    switch(timeFrame) {
      case 0:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 1);
        return 40;
        break;
      case 1:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 7);
        return 40;
        break;
      case 2:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 28);
        return 40;
        break;
      case 3:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 365);
        return 40;
        break;
    }
  }

  getUserCategoryConsumption(user_id: string, category: string, timeFrame: number) {
    let min_date: Date;
    switch(timeFrame) {
      case 0:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 1);
        return 40;
        break;
      case 1:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 7);
        return 40;
        break;
      case 2:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 28);
        return 40;
        break;
      case 3:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 365);
        return 40;
        break;
    }
  }

  getTotalUserConsumption(user_id: string, timeFrame: number) {
    let min_date: Date;
    switch(timeFrame) {
      case 0:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 1);
        return 20
        break;
      case 1:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 7);
        return 40
        break;
      case 2:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 28);
        return  80
        break;
      case 3:
        min_date = new Date();
        min_date.setDate(min_date.getDate() - 365);
        return 160
        break;
    }
  }

  getUserMonthAllowance(user_id: string, date: Date) {
    return 2000;
  }

  getMonthAllowance(date: Date) {
    return 2000;
  }
  
  getWeekAllowance(date: Date) {
    return 500;
  }

  getConsumptionObservable(user_id: string) {
    const consumptionEmmmiter = new EventEmitter();
    setInterval(() => consumptionEmmmiter.emit(100), 3000);
    return consumptionEmmmiter;
  }
}