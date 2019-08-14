import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {DataRecord} from '../models/DataRecord';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  currentWeather : DataRecord;
  weatherRecords : Array<DataRecord>;

  constructor(private http : HttpClient) {
    this.currentWeather = null;
    this.weatherRecords = [];
   }

  getCurrentWheather(){
    this.currentWeather =null;  
    let promise = new Promise((resolve, reject) => {
    let apiURL = 'https://localhost:44333/api/values/';
    this.http.get<DataRecord>(apiURL)
      .toPromise()
      .then(
        res => { // Success
          this.currentWeather=res;
          console.log(this.currentWeather);
          resolve();
        }
      );
  });
  return promise;
  }
    getWeatherData(){
    this.weatherRecords =[];  
    let promise = new Promise((resolve, reject) => {
    let apiURL = 'https://localhost:44333/api/values/1';
    this.http.get<DataRecord[]>(apiURL)
      .toPromise()
      .then(
        res => { // Success
        this.weatherRecords = res;
        console.log(this.weatherRecords);
        resolve();
        }
      );
  });
  return promise;
  }
}
