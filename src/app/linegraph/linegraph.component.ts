import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import * as CanvasJS from '../canvasjs.min';
import { DataRecord } from '../models/DataRecord';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-linegraph',
  templateUrl: './linegraph.component.html',
  styleUrls: ['./linegraph.component.scss']
})
export class LinegraphComponent implements OnInit {


  loaded : boolean;
  views : Array<any>;

  constructor(private weatherService: WeatherService) {
    this.loaded = false;
    this.views = [];
   }
  // this.createChart()
  ngOnInit() {
    this.weatherService.getWeatherData().then(() =>  this.weatherViews(this.weatherService.weatherRecords)).then(()=>this.createChart());

    }
    createChart(){

      let chart = new CanvasJS.Chart("chartContainer", {
        zoomEnabled: true,
        animationEnabled: true,
        exportEnabled: true,
        axisY:{
          includeZero: false
        },
        title: {
          text: "Temperature in °C per view"
        },
        data: [{
          toolTipContent: "Date: {x} <br> Temperature: {y} <br> Description: {description} <br> Wind speed: {windSpeed} <br> humidity: {humidity}",
          type: "line",
          dataPoints: this.views
        }]
      });

      chart.render();
    }
    weatherViews(data : DataRecord[]){
      for(let record of data){
        let date = formatDate(record.recordDate, 'yyyy, M, d, H: m: s', 'en-US')
        this.views.push({x : new Date(date), y : record.temp, windSpeed : record.windSpeed, humidity : record.humidity, description: record.description})
      }
    }

}
