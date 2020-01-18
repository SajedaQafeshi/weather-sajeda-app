import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentLocationService {

  latitude: number;
  longitude: number;
  constructor() { 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        this.longitude = position.coords.longitude;
        this.latitude = position.coords.latitude;
        console.log(this.latitude);
      });
  } else {
     console.log("No support for geolocation")
  }
  }

  // Get Current Location Coordinates
  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          this.longitude = position.coords.longitude;
          this.latitude = position.coords.latitude;
          console.log(this.latitude);

        });
    } else {
       console.log("No support for geolocation")
    }
  }

}
