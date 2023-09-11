import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherIconService } from '../../services/weather-icon.service';
import { User } from 'src/app/models/user';
import { WeatherData } from 'src/app/models/weatherData';
import { UsersService } from 'src/app/services/users.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  weatherData: WeatherData | null = null;

  constructor(
    private http: HttpClient,
    private usersService: UsersService,
    private weatherService: WeatherService,
    private weatherIconService: WeatherIconService
  ) {}

  ngOnInit(): void {
    this.usersService
      .getUsers()
      .subscribe((data: any) => {
        this.users = data.results;

        this.users.forEach((user) => {
          const latitude = user.location.coordinates.latitude;
          const longitude = user.location.coordinates.longitude;

          this.weatherService
            .getWeather(latitude, longitude)
            .subscribe((weather: any) => {
              user.weatherData = weather;
              console.log(user.weatherData);
            });
        });
    });
  }
}
