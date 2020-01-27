import { Component, OnInit } from '@angular/core';
import { WeatherAPIService } from '../services/weather-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  state="none";
  daysInfo:any;
  currentDayInfo ={
    icon:"",
    temp:0,
    date:"",
    city:'""',
    weatherMain: "",
    weatherDec: ""
  }
  date = new Date();
  constructor(private weatherAPIservice:WeatherAPIService) {
  }

  ngOnInit() {
     this.weatherAPIservice.get("forecast",{
       q:"Hebron"
     }).subscribe(data => {
      //this.currentDayInfo.city =data['city'];
      console.log(this.currentDayInfo);
      this.currentDay(data['list'][0],data['city']['name']);
      this.daysInfo = data['list'].filter(day => {
        day.main.temp= Math.floor(day.main.temp - 273.15);
        return day.dt_txt.endsWith("15:00:00");
      });
      this.daysInfo.pop();
      console.log(this.daysInfo);
    });    
  }

  currentDay(data :any,city:string){
    this.currentDayInfo = {
      date:"",
      icon:data.weather[0].icon,
      weatherDec:data.weather[0].description,
      weatherMain:data.weather[0].main,
      temp:Math.floor(data.main.temp - 273.15),
      city:city.toString()
    }
    console.log(this.currentDayInfo);
  }

  showModal() {
    this.state= "flex";
  }
}
