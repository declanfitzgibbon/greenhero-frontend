import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor(private http: HttpClient) { }

  getLatestTemperature() {
    return this.http.get<any>('https://greenhero.herokuapp.com/Temperature/getLatestTemperature').toPromise();
  }

  getLatestACState() {
    return this.http.get<any>('https://greenhero.herokuapp.com/AcState/getLatestACState').toPromise();
  }
  
  getDesiredTemp() {
    return this.http.get<any>('https://greenhero.herokuapp.com/TemperatureDesired/getLatestTemperatureDesired').toPromise();
  }
  
  saveDesiredTemp(getDesiredTemp: number) {
    return this.http.post<any>('https://greenhero.herokuapp.com/TemperatureDesired', {
      "temperatureDesired": +getDesiredTemp,
      "_id": "_id",
      "time": (new Date()).toISOString()
    }).toPromise();
  }

}
