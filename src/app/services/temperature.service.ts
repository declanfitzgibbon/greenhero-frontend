import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor(private http: HttpClient) { }

  getLatestTemperature() {
    return this.http.get<any>('http://localhost:8080/Temperature/getLatestTemperature').toPromise();
  }

  getLatestACState() {
    return this.http.get<any>('http://localhost:8080/AcState/getLatestACState').toPromise();
  }
  
  getDesiredTemp() {
    return this.http.get<any>('http://localhost:8080/TemperatureDesired/getLatestTemperatureDesired').toPromise();
  }
  
  saveDesiredTemp(getDesiredTemp: number) {
    return this.http.post<any>('http://localhost:8080/TemperatureDesired', {
      "temperatureDesired": +getDesiredTemp,
      "_id": "_id",
      "time": (new Date()).toISOString()
    }).toPromise();
  }

}
