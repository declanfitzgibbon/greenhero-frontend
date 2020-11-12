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
            max_date: max_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setHours((new Date()).getHours() - 2);
        fourthValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setHours((new Date()).getHours() - 3);
        thirdValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setHours((new Date()).getHours() - 4);
        secondValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setHours((new Date()).getHours() - 5);
        firstValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString()  
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
            max_date: max_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 2);
        fourthValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 3);
        thirdValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 4);
        secondValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 5);
        firstValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString()  
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
            max_date: max_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 14);
        fourthValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 21);
        thirdValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 28);
        secondValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 35);
        firstValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString()  
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
            max_date: max_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setMonth((new Date()).getMonth() - 2);
        fourthValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setMonth((new Date()).getMonth() - 3);
        thirdValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setMonth((new Date()).getMonth() - 4);
        secondValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString()  
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setMonth((new Date()).getMonth() - 5);
        firstValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetween', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString()  
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

  async getConsumptionByCategory(timeFrame: number) {
    let min_date: Date;
    let max_date: Date;
    let firstValue: number, secondValue: number, thirdValue: number, fourthValue: number;
    switch(timeFrame) {
      case 0:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 1);
        break;
      case 1:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 7);
        break;
      case 2:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 28);
        break;
      case 3:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 365);
        break;
      }
      firstValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenForCategory', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            category: 'Stations'
          }
        }).toPromise()).total;
      secondValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenForCategory', {
        params: {
          min_date: min_date.toISOString(),
          max_date: max_date.toISOString(),
          category: 'Light'
        }
      }).toPromise()).total;
      thirdValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenForCategory', {
        params: {
          min_date: min_date.toISOString(),
          max_date: max_date.toISOString(),
          category: 'Heating'
        }
      }).toPromise()).total;
      fourthValue = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenForCategory', {
        params: {
          min_date: min_date.toISOString(),
          max_date: max_date.toISOString(),
          category: 'Outlets'
        }
      }).toPromise()).total;
      return [
          {
            name: 'Stations',
            label: 'Stations',
            value: firstValue
          },
          {
            name: 'Light',
            label: 'Light',
            value: secondValue
          },
          {
            name: 'Heating',
            label: 'Heating',
            value: thirdValue
          },
          {
            name: 'Outlets',
            label: 'Outlets',
            value: fourthValue
          }
      ];
  }
  
  async getUserConsumptionWithComparisson(user_id: string, timeFrame: number) {
    let min_date: Date;
    let max_date: Date;
    let firstValueU: number, secondValueU: number, thirdValueU: number, fourthValueU: number, fifthValueU: number;
    let firstValueP: number, secondValueP: number, thirdValueP: number, fourthValueP: number, fifthValueP: number;
    let response: any;
    switch(timeFrame) {
      case 0:
        
        min_date = new Date();
        max_date = new Date();
        min_date.setHours((new Date()).getHours() - 1);
        fifthValueU = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenUser', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        fifthValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAverageConsumptionBetweenUserProfession', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setHours((new Date()).getHours() - 2);
        fourthValueU = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenUser', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        fourthValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAverageConsumptionBetweenUserProfession', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setHours((new Date()).getHours() - 3);
        thirdValueU = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenUser', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        thirdValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAverageConsumptionBetweenUserProfession', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setHours((new Date()).getHours() - 4);
        secondValueU = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenUser', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        secondValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAverageConsumptionBetweenUserProfession', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setHours((new Date()).getHours() - 5);
        firstValueU = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenUser', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        firstValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAverageConsumptionBetweenUserProfession', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;

        response = [
          {
            name: '5 hours ago',
            series: []
          },
          {
            name: '4 hours ago',
            series: []
          },
          {
            name: '3 hours ago',
            series: []
          },
          {
            name: '2 hours ago',
            series: []
          },
          {
            name: '1 hour ago',
            series: []
          }
        ];
        break;
      case 1:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 1);
        fifthValueU = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenUser', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        fifthValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAverageConsumptionBetweenUserProfession', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 2);
        fourthValueU = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenUser', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        fourthValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAverageConsumptionBetweenUserProfession', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 3);
        thirdValueU = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenUser', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        thirdValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAverageConsumptionBetweenUserProfession', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 4);
        secondValueU = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenUser', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        secondValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAverageConsumptionBetweenUserProfession', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 5);
        firstValueU = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenUser', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        firstValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAverageConsumptionBetweenUserProfession', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        
        response = [
          {
            name: '5 days ago',
            series: []
          },
          {
            name: '4 days ago',
            series: []
          },
          {
            name: '3 days ago',
            series: []
          },
          {
            name: '2 days ago',
            series: []
          },
          {
            name: 'Yesterday',
            series: []
          }
        ];
        break;
      case 2:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 7);
        fifthValueU = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenUser', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        fifthValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAverageConsumptionBetweenUserProfession', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 14);
        fourthValueU = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenUser', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        fourthValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAverageConsumptionBetweenUserProfession', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 21);
        thirdValueU = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenUser', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        thirdValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAverageConsumptionBetweenUserProfession', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 28);
        secondValueU = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenUser', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        secondValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAverageConsumptionBetweenUserProfession', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setDate((new Date()).getDate() - 35);
        firstValueU = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenUser', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        firstValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAverageConsumptionBetweenUserProfession', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        
        response =  [
          {
            name: '5 weeks ago',
            series: []
          },
          {
            name: '4 weeks ago',
            series: []
          },
          {
            name: '3 weeks ago',
            series: []
          },
          {
            name: '2 weeks ago',
            series: []
          },
          {
            name: '1 week ago',
            series: []
          }
        ];
        break;
      case 3:
        min_date = new Date();
        max_date = new Date();
        min_date.setMonth((new Date()).getMonth() - 1);
        fifthValueU = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenUser', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        fifthValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAverageConsumptionBetweenUserProfession', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setMonth((new Date()).getMonth() - 2);
        fourthValueU = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenUser', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        fourthValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAverageConsumptionBetweenUserProfession', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setMonth((new Date()).getMonth() - 3);
        thirdValueU = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenUser', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        thirdValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAverageConsumptionBetweenUserProfession', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setMonth((new Date()).getMonth() - 4);
        secondValueU = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenUser', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        secondValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAverageConsumptionBetweenUserProfession', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        
        
        max_date = new Date(min_date);
        min_date = new Date();
        min_date.setMonth((new Date()).getMonth() - 5);
        firstValueU = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenUser', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        firstValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAverageConsumptionBetweenUserProfession', {
          params: {
            min_date: min_date.toISOString(),
            max_date: max_date.toISOString(),
            user_id: user_id
          }
        }).toPromise()).total;
        
        response = [
          {
            name: '5 months ago',
            series: []
          },
          {
            name: '4 months ago',
            series: []
          },
          {
            name: '3 months ago',
            series: []
          },
          {
            name: '2 months ago',
            series: []
          },
          {
            name: 'Last month',
            series: []
          }
        ];
        break;
    }
    response[0].series.push({
      name:"You",
      value: firstValueU
    });
    response[0].series.push({
      name: "Profession average",
      value: firstValueP
    });
    response[1].series.push({
      name:"You",
      value: secondValueU
    });
    response[1].series.push({
      name: "Profession average",
      value: secondValueP
    });
    response[2].series.push({
      name:"You",
      value: thirdValueU
    });
    response[2].series.push({
      name: "Profession average",
      value: thirdValueP
    });
    response[3].series.push({
      name:"You",
      value: fourthValueU
    });
    response[3].series.push({
      name: "Profession average",
      value: fourthValueP
    });
    response[4].series.push({
      name:"You",
      value: fifthValueU
    });
    response[4].series.push({
      name: "Profession average",
      value: fifthValueP
    });

    return response;
  }

  async getConsumptionByProfession(timeFrame) {
    let min_date: Date;
    let max_date: Date;
    let firstValueP: number, secondValueP: number, thirdValueP: number, fourthValueP: number;
    switch(timeFrame) {
      case 0:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 1);
        break;
      case 1:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 7);
        break;
      case 2:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 28);
        break;
      case 3:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 365);
        break;
    }
    firstValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getConsumptionBetweenProfession', {
      params: {
        min_date: min_date.toISOString(),
        max_date: max_date.toISOString(),
        occupation: 'Developers'
      }
    }).toPromise()).total;
    secondValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getConsumptionBetweenProfession', {
      params: {
        min_date: min_date.toISOString(),
        max_date: max_date.toISOString(),
        occupation: 'Lawyers'
      }
    }).toPromise()).total;
    thirdValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getConsumptionBetweenProfession', {
      params: {
        min_date: min_date.toISOString(),
        max_date: max_date.toISOString(),
        occupation: 'Designers'
      }
    }).toPromise()).total;
    fourthValueP = (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getConsumptionBetweenProfession', {
      params: {
        min_date: min_date.toISOString(),
        max_date: max_date.toISOString(),
        occupation: 'Engineers'
      }
    }).toPromise()).total;
    return [
      {
        name: 'Developers',
        label: 'Developers',
        value: firstValueP
      },
      {
        name: 'Lawyers',
        label: 'Lawyers',
        value: secondValueP
      },
      {
        name: 'Designers',
        label: 'Designers',
        value: thirdValueP
      },
      {
        name: 'Engineers',
        label: 'Engineers',
        value: fourthValueP
      }
    ];
  }

  async getUserHighestCategory(user_id: string, timeFrame: number) {
    let min_date: Date;
    let max_date: Date;
    switch(timeFrame) {
      case 0:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 1);
        break;
      case 1:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 7);
        break;
      case 2:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 28);
        break;
      case 3:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 365);
        break;
    }

    return (await this.http.get<{category: string}>('http://localhost:8080/Consumption/getConsumptionHighestCategoryForUser', {
      params: {
        min_date: min_date.toISOString(),
        max_date: max_date.toISOString(),
        user_id: user_id
      }
    }).toPromise()).category;

  }

  async getUserHighestDay(user_id: string, timeFrame: number) {
    let min_date: Date;
    let max_date: Date;
    switch(timeFrame) {
      case 0:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 1);
        break;
      case 1:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 7);
        break;
      case 2:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 28);
        break;
      case 3:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 365);
        break;
    }
    return (await this.http.get<{day: string}>('http://localhost:8080/Consumption/getConsumptionHighestDayForUser', {
      params: {
        min_date: min_date.toISOString(),
        max_date: max_date.toISOString(),
        user_id: user_id
      }
    }).toPromise()).day;
  }

  async getUserCategoryConsumption(user_id: string, category: string, timeFrame: number) {
    let min_date: Date;
    let max_date: Date;
    switch(timeFrame) {
      case 0:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 1);
        break;
      case 1:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 7);
        break;
      case 2:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 28);
        break;
      case 3:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 365);
        break;
    }
    return (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenForCategoryAndUser', {
      params: {
        min_date: min_date.toISOString(),
        max_date: max_date.toISOString(),
        user_id: user_id,
        category: category
      }
    }).toPromise()).total;
  }

  async getTotalUserConsumption(user_id: string, timeFrame: number) {
    let min_date: Date;
    let max_date: Date;
    switch(timeFrame) {
      case 0:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 1);
        break;
      case 1:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 7);
        break;
      case 2:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 28);
        break;
      case 3:
        min_date = new Date();
        max_date = new Date();
        min_date.setDate((new Date()).getDate() - 365);
        break;
    }
    return (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenForUser', {
      params: {
        min_date: min_date.toISOString(),
        max_date: max_date.toISOString(),
        user_id: user_id
      }
    }).toPromise()).total;
  }

  async getUserMonthAllowance(user_id: string, date: Date) {
    return (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getUserMonthAllowance', {
      params: {
        user_id: user_id,
        date: date.toISOString()
      }
    }).toPromise()).total;
  }
  
  async getTotalUserConsumptionForMonth(user_id: string, date: Date) {
    let min_date: Date, max_date: Date;
    min_date = new Date();
    max_date = date;
    min_date.setMonth(date.getMonth());
    min_date.setFullYear(date.getFullYear());
    min_date.setDate(1);
    return (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getAllConsumptionBetweenForUser', {
      params: {
        min_date: min_date.toISOString(),
        max_date: max_date.toISOString(),
        user_id: user_id
      }
    }).toPromise()).total;
  }

  async getMonthAllowance(date: Date) {
    return (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getTotalMonthAllowance', {
      params: {
        date: date.toISOString()
      }
    }).toPromise()).total;
  }
  
  async getWeekAllowance(date: Date) {
    return (await this.http.get<{total: number}>('http://localhost:8080/Consumption/getTotalWeekAllowance', {
      params: {
        date: date.toISOString()
      }
    }).toPromise()).total;
  }

  // WENHAN THIS NEEDS TO BE CONNECTED TO THE DB IN SOME WAY TO BRING THE CONSUMPTION OF THE CURRENT SESSION
  async getConsumptionObservable() {
    return (await this.http.get<{total: number}>('http://localhost:8080/User/getActivatedUser').toPromise()).total;
  }
}