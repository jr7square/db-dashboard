import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Trip } from 'app/dashboard/trip';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TripsService {

  private readonly url: string;
  private readonly headers: Headers;

  constructor(private http: Http) {
    this.url = 'http://localhost:3000/';
    this.headers = new Headers({'Content-Type': 'application/json'});
  }

  getUserTrips(userEmail: string): Observable<Trip> {
    return this.http.post(this.url, {userEmail: userEmail}, this.headers)
      .map(response => {
        let jsonRes = response.json();
        if(jsonRes.success) return jsonRes;
        else return [];
      });
  }



}
