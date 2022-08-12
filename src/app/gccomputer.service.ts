import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GCComputerService {
  apiUrl =
    'https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json';

  constructor(private http: HttpClient) {}

  getInventors(): any {
    return this.http.get(this.apiUrl);
  }
}
