import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumptionService {

  constructor(private http: HttpClient) { }

  async getConsumptionSummary(timeFrame: number) {
    let min_date: Date;
    let max_date: Date;
    let firstValue: number, secondValue: number, thirdValue: number, fourthValue: number, fifthValue: number;
    switch(timeFrame) {
      case 0:
        
        min_date = new Date();
        max_date = new Date();
        min_date.setHours((new Date()).getHours() - 1);
        fifthValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: min_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setHours((new Date()).getHours() - 2);
        fourthValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: min_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setHours((new Date()).getHours() - 3);
        thirdValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: min_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setHours((new Date()).getHours() - 4);
        secondValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: min_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setHours((new Date()).getHours() - 5);
        firstValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: min_date.toISOString()  
          }
        }).toPromise()).total;
        return [
          {
            name: '5 hours ago',
            value: firstValue
          },
          {
            name: '4 hours ago',
            value: secondValue
          },
          {
            name: '3 hours ago',
            value: thirdValue
          },
          {
            name: '2 hours ago',
            value: fourthValue
          },
          {
            name: '1 hour ago',
            value: fifthValue
          }
        ];
        break;
      case 1:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 1);
        fifthValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: min_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 2);
        fourthValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: min_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 3);
        thirdValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: min_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 4);
        secondValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: min_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 5);
        firstValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: min_date.toISOString()  
          }
        }).toPromise()).total;
        return [
          {
            name: '5 days ago',
            value: firstValue
          },
          {
            name: '4 days ago',
            value: secondValue
          },
          {
            name: '3 days ago',
            value: thirdValue
          },
          {
            name: '2 days ago',
            value: fourthValue
          },
          {
            name: 'Yesterday',
            value: fifthValue
          }
        ];
        break;
      case 2:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 7);
        fifthValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: min_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 14);
        fourthValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: min_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 21);
        thirdValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: min_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 28);
        secondValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: min_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 35);
        firstValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: min_date.toISOString()  
          }
        }).toPromise()).total;
        return  [
          {
            name: '5 weeks ago',
            value: firstValue
          },
          {
            name: '4 weeks ago',
            value: secondValue
          },
          {
            name: '3 weeks ago',
            value: thirdValue
          },
          {
            name: '2 weeks ago',
            value: fourthValue
          },
          {
            name: '1 week ago',
            value: fifthValue
          }
        ];
        break;
      case 3:
        min_date = new Date();
        max_date = new Date();
        min_date.setMonth((new Date()).getMonth() - 1);
        fifthValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: min_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setMonth((new Date()).getMonth() - 2);
        fourthValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: min_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setMonth((new Date()).getMonth() - 3);
        thirdValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: min_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setMonth((new Date()).getMonth() - 4);
        secondValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: min_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setMonth((new Date()).getMonth() - 5);
        firstValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: min_date.toISOString()  
          }
        }).toPromise()).total;
        return [
          {
            name: '5 months ago',
            value: firstValue
          },
          {
            name: '4 months ago',
            value: secondValue
          },
          {
            name: '3 months ago',
            value: thirdValue
          },
          {
            name: '2 months ago',
            value: fourthValue
          },
          {
            name: 'Last month',
            value: fifthValue
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