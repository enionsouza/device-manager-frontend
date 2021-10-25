import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) { }

  getDevices(): any {
    const url = 'http://localhost:8080/devices/';
    return this.http.get(url);
  }
  getCategories(): any {
    const url = 'http://localhost:8080/categories/';
    return this.http.get(url);
  }
}
