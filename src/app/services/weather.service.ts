import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weatherData.model';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  constructor(private http: HttpClient) {
  }

  getWeather(latitude: number, longitude: number) {
    return this.http.get<WeatherData>(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`);
  }
}
