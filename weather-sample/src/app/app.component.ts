import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  city = '';
  weatherData: any;
  apiKey: string = 'YOUR-OPEN-WEATHER-API-KEY';

  constructor(private http: Http) { }

  onBlur() {
    this.loadWeatherData(this.city).toPromise().then(result => {
      this.weatherData = result;
    });
  }

  private loadWeatherData(city: string) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR-AUTHORIZATION-CODE'
    });
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=${this.apiKey}`, headers)
    .map(response => {
      return response.json();
    });
  }
}
