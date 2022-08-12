import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GCDonutService {
  apiUrl: string = 'https://grandcircusco.github.io/demo-apis/donuts.json';
  apiUrl2: string = 'https://grandcircusco.github.io/demo-apis/donuts/';

  constructor(private http: HttpClient) {}

  getDonuts(): any {
    return this.http.get(this.apiUrl);
  }

  getDonutDetail(id: number): any {
    return this.http.get(this.apiUrl2 + id + '.json');
  }
}
