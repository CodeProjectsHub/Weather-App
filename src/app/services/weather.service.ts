//import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.models';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      environment.weatherApiBaseUrl + cityName,
      {
        headers: {
          'X-RapidAPI-Key':
            '2d6850b67amsh841a65dd27e6df0p133dc8jsn098ebbfbd787',
          'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com',
        },
      }
    );
  }
}
