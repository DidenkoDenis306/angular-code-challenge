import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherIconService {
  private weatherIcons: { [key: number]: string } = {
    0: '../../assets/sunny-day-svgrepo-com.svg',
    1: '../../assets/partly-cloudy-svgrepo-com.svg',
    2: '../../assets/partly-cloudy-svgrepo-com.svg',
    3: '../../assets/partly-cloudy-svgrepo-com.svg',
    45: '../../assets/fog-svgrepo-com.svg',
    48: '../../assets/fog-svgrepo-com.svg',
    51: '../../assets/drizzle-svgrepo-com.svg',
    53: '../../assets/drizzle-svgrepo-com.svg',
    55: '../../assets/drizzle-svgrepo-com.svg',
    56: '../../assets/cloud-drizzle-svgrepo-com.svg',
    57: '../../assets/cloud-drizzle-svgrepo-com.svg',
    61: '../../assets/rain-storm-svgrepo-com.svg',
    63: '../../assets/rain-storm-svgrepo-com.svg',
    65: '../../assets/rain-storm-svgrepo-com.svg',
    66: '../../assets/rain-storm-svgrepo-com.svg',
    67: '../../assets/rain-storm-svgrepo-com.svg',
    71: '../../assets/rain-storm-svgrepo-com.svg',
    73: '../../assets/cloud-snow-svgrepo-com.svg',
    75: '../../assets/cloud-snow-svgrepo-com.svg',
    77: '../../assets/cloud-snow-svgrepo-com.svg',
    80: '../../assets/rain-storm-svgrepo-com.svg',
    81: '../../assets/rain-storm-svgrepo-com.svg',
    82: '../../assets/rain-storm-svgrepo-com.svg',
    85: '../../assets/cloud-snowfall-svgrepo-com.svg',
    86: '../../assets/cloud-snowfall-svgrepo-com.svg',
    95: '../../assets/thunderstorm-svgrepo-com.svg',
    96: '../../assets/thunderstorm-svgrepo-com.svg',
    99: '../../assets/thunderstorm-svgrepo-com.svg',
  };

  getWeatherIconPath(weatherCode: number): string {
    return this.weatherIcons[weatherCode] || 'path_to_default_icon.png';
  }
}
