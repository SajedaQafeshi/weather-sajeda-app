import { Component, OnInit, Input } from '@angular/core';
import { CurrentLocationService } from '../services/current-location.service';
import { WeatherAPIService } from '../services/weather-api.service';

@Component({
  selector: 'app-day-info',
  templateUrl: './day-info.component.html',
  styleUrls: ['./day-info.component.scss']
})
export class DayInfoComponent implements OnInit {

  info:any;
  longitude:number;
  latitude:number;

  constructor(private location : CurrentLocationService,private api:WeatherAPIService) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        this.longitude = position.coords.longitude;
        this.latitude = position.coords.latitude;
        console.log(this.latitude);
        this.api.get("weather",{
          lat:this.latitude,
          lon:this.longitude
        }).subscribe(data => {
            this.info=data; 
            console.log(data);
            this.info['main']['temp'] = Math.floor(this.info.main.temp - 273.15);
            this.info['main']['temp_max'] = Math.floor(this.info.main.temp_max - 273.15);
            this.info.dt = new Date(this.info.dt);
          });
      });
      } else {
        console.log("No support for geolocation")
      }
    }

   

  ngOnInit() {
  }

}
