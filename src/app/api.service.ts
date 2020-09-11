import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(public http: HttpClient) { }

  getdata(url) {
    // const getUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';
    return this.http.get(url);
  }

}
