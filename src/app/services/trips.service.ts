import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Trip } from 'app/dashboard/trip';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from 'environments/environment';

@Injectable()
export class TripsService {

  private readonly url: string;
  private readonly headers: Headers;

  constructor(private http: Http) {
    this.url = environment.baseUrl;
    this.headers = new Headers({'Content-Type': 'application/json'});
  }

  getUserTrips(userEmail: string): Observable<any> {
    const tripsUrl = `${this.url}/trips`;
    return this.http.post(tripsUrl, {touristEmail: userEmail}, this.headers)
      .map(response => {
        const jsonRes = response.json();
        if(jsonRes.success) return jsonRes;
      });
  }

  bookTrip(trip: Trip): Observable<any> {
    const bookUrl = `${this.url}/host/book`;
    return this.http.post(bookUrl, trip.encode(), this.headers)
      .map(response => {
        console.log(response.json());
        return response.json();
      });
  }




}
