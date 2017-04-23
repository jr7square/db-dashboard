import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Host } from 'app/dashboard/host';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from 'environments/environment';



@Injectable()
export class SearchService {
  private readonly url: string;
  private readonly headers: Headers;
  private searchResults: Host[];

  constructor(private http: Http) {
    this.url = `${environment.baseUrl}/search`;
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.searchResults = [];
  }

  searchByCity(city: string): Observable<Host[]> {
    const searchCityUrl: string = `${this.url}/city/noDate?city=${city}`;
    return this.http.get(searchCityUrl)
      .map(response => {
        const jResponse = response.json();
        if(jResponse.found) {
          this.searchResults = this.resultsToHosts(jResponse.results);
          return this.searchResults;
        }
        else return [];
      });
  }

  searchByCountry(country: string): Observable<Host[]> {
    const searchCountryUrl: string = `${this.url}/country/noDate?country=${country}`;
    return this.http.get(searchCountryUrl)
      .map(response => {
        const jResponse = response.json();
        if(jResponse.found) {
          this.searchResults = this.resultsToHosts(jResponse.results);
          return this.searchResults;
        }
        else return [];
      });

  }
  //
  searchByCityCountry(city: string, country: string): Observable<Host[]> {
    const searchCityCountryUrl: string = `${this.url}/city&country/noDate?city=${city}&country=${country}`;
    return this.http.get(searchCityCountryUrl)
      .map(response => {
        const jResponse = response.json();
        if(jResponse.found) {
          this.searchResults = this.resultsToHosts(jResponse.results);
          return this.searchResults;
        }
        else return [];
      });
  }

  searchByCityDate(city: string, startDate: string, endDate: string): Observable<Host[]> {
    const searchCityUrl: string = `${this.url}/city?city=${city}&startDate=${startDate}&endDate=${endDate}`;
    return this.http.get(searchCityUrl)
      .map(response => {
        const jResponse = response.json();
        if(jResponse.found) {
          this.searchResults = this.resultsToHosts(jResponse.results);
          return this.searchResults;
        }
        else return [];
      });
  }

  searchByCountryDate(country: string, startDate: string, endDate: string): Observable<Host[]> {
    const searchCountryDateUrl: string = `${this.url}/country?country=${country}&startDate=${startDate}&endDate=${endDate}`;
    return this.http.get(searchCountryDateUrl)
      .map(response => {
        const jResponse = response.json();
        if(jResponse.found) {
          this.searchResults = this.resultsToHosts(jResponse.results);
          return this.searchResults;
        }
        else return [];
      });

  }
  //
  searchByCityCountryDate(city: string, country: string, startDate: string, endDate: string): Observable<Host[]> {
    const searchUrl: string = `${this.url}/city&country?city=${city}&country=${country}&startDate=${startDate}
                              &endDate=${endDate}`;
    return this.http.get(searchUrl)
      .map(response => {
        const jResponse = response.json();
        if(jResponse.found) {
          this.searchResults = this.resultsToHosts(jResponse.results);
          return this.searchResults;
        }
        else return [];
      });
  }

  getSearchResults(index: number): Host {
    return this.searchResults[index];
  }

  getAllResults(): Host [] {
    return this.searchResults;
  }

  private resultsToHosts(results: any): Host[] {
    if(!results) {return []}
    return results.map(host => {
      return new Host(
        host.email,
        host.city,
        host.country,
        host.start_date,
        host.bio,
        host.first_name,
        host.last_name,
        host.rating
      );
    })
  }

}
