import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { WeatherAPIService } from '../services/weather-api.service';

@Component({
	selector: 'app-city-info',
	templateUrl: './city-info.component.html',
	styleUrls: ['./city-info.component.scss']
})
export class CityInfoComponent implements OnInit {

	city:string;
	info:any;
	colors = ["#f2bf28","#66b5af","#f28277","#3B5D8B"];
	color :string;
	constructor(private route: ActivatedRoute,
				private api:WeatherAPIService) {
		this.city=this.route.snapshot.paramMap.get("city");

		this.api.get("weather",{q:this.city+",ps"}).subscribe(data =>{
			console.log(data);
			this.info = data;
			this.info['main']['temp'] = Math.floor(this.info.main.temp - 273.15);
            this.info['main']['temp_max'] = Math.floor(this.info.main.temp_max - 273.15);
            this.info.dt = new Date(this.info.dt);
		});
	}
	
	ngOnInit() {
		this.color = this.colors[Math.floor(Math.random()*this.colors.length)];

	}

}
