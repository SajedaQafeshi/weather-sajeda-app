import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  baseParam ={
    appid : environment.weatherAPIKey,
    
  }
  
  constructor(private http:HttpClient) { }

  get(endPoint :string, param : any) {
    let url = environment.weatherAPI + endPoint;
    let finalParam = {...param , ...this.baseParam};
    console.log(finalParam)
    return this.http.get(url,{params : finalParam});
    
  }
}
