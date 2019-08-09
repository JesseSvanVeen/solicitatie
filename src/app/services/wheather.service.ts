import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WheatherService {
  
  currentWeather : any;
  constructor(private http : HttpClient) {
    this.currentWeather = null;
   }

  getCurrentWheather(){
      let promise = new Promise((resolve, reject) => {
    let apiURL = 'https://localhost:44333/api/values/';
    this.http.get(apiURL)
      .toPromise()
      .then(
        res => { // Success
          console.log(res);
          this.currentWeather=res;
          resolve();
        }
      );
  });
  return promise;
  }
}
