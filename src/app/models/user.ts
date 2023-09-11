import { WeatherData } from "./weatherData";

export interface User {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  picture: {
    large: string;
  };
  location: {
    city: string;
    country: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  email: string;
  weatherData: WeatherData;
}
