import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherIconService } from '../../services/weather-icon.service';
import { User } from 'src/app/models/user.mode';
import { WeatherData } from 'src/app/models/weatherData.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  weatherData: WeatherData | null = null;

  constructor(private http: HttpClient, private weatherIconService: WeatherIconService) { }

  ngOnInit(): void {
    this.http.get<User>('https://randomuser.me/api/?results=10').subscribe((data: any) => {
      this.users = data.results;

      this.users.forEach((user) => {
        const latitude = user.location.coordinates.latitude;
        const longitude = user.location.coordinates.longitude;

        this.http.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`)
          .subscribe((weather: any) => {
            user.weatherData = weather;
            console.log(user.weatherData);
          });
      });
    });
  }

  getMinTemperature(user: User): number {
    const dayTemperature = user.weatherData.hourly.temperature_2m;

    return Math.min(...dayTemperature) || 0;
  }

  getMaxTemperature(user: User): number {
    const dayTemperature = user.weatherData.hourly.temperature_2m;

    return Math.max(...dayTemperature) || 0;
  }

  getWeatherIconPath(user: User): string {
    return this.weatherIconService.getWeatherIconPath(user.weatherData.current_weather.weathercode);
  }

  saveUser(user: User): void {
    const savedUsers = JSON.parse(localStorage.getItem('savedUsers') || '[]');
    savedUsers.push(user);
    localStorage.setItem('savedUsers', JSON.stringify(savedUsers));
  }
}
