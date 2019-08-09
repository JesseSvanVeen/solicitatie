import { Component, OnInit } from '@angular/core';
import { WheatherService } from '../services/wheather.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  data : any;
  icon : string;
  constructor(private weatherService : WheatherService) {
    this.data = null;
   }

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData(){
    this.weatherService.getCurrentWheather().then(
      ()=>    this.icon = "http://openweathermap.org/img/wn/"+this.weatherService.currentWeather.weather[0].icon+"@2x.png"
    );
  }

}
