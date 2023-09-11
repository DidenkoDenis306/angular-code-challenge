import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.mode';
import { WeatherIconService } from 'src/app/services/weather-icon.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: User;

  saved = false;
  isRandomUsersRoute = false;

  constructor(private weatherIconService: WeatherIconService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.url.subscribe(urlSegments => {
      this.isRandomUsersRoute = urlSegments.some(segment => segment.path === 'users');
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
    return this.weatherIconService.getWeatherIconPath(
      user.weatherData.current_weather.weathercode
    );
  }

  saveUser(user: User): void {
    this.saved = !this.saved

    const savedUsers = JSON.parse(localStorage.getItem('savedUsers') || '[]');

    savedUsers.push(user);
    localStorage.setItem('savedUsers', JSON.stringify(savedUsers));
  }
}
