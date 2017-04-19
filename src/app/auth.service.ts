import { Injectable } from '@angular/core';
import { User } from 'app/log-in/user';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Headers, Http } from '@angular/http';
import { environment } from 'environments/environment';

@Injectable()
export class AuthService {
  private isLoggedIn: boolean = false;
  private redirectUrl: string;
  private url: string;
  private headers: Headers;

  constructor(private http: Http) {
    this.url = environment.baseUrl;
    this.headers = new Headers({'Accept': 'application/json','Content-Type': 'application/json'});
  }

  login(email: string, password: string): Observable<any> {
    let loginUrl = `${this.url}/Touring360/login`;
    let testUrl = "http://localhost:3000/users/login";
    return this.http.post(testUrl, {email: email, password: password}, this.headers)
    .map(response => {
      console.log(response.json());
      let jResponse = response.json();
      if(jResponse.success){
        this.isLoggedIn = true;
      }
      if(jResponse.wrongPassword){
        this.isLoggedIn = false;
      }
      return jResponse;
    });
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  getRedirectUrl(): string {
    return this.redirectUrl;
  }

  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }
}
