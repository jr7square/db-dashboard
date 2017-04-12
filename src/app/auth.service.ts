import { Injectable } from '@angular/core';
import { User } from 'app/log-in/user';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Headers, Http } from '@angular/http';

@Injectable()
export class AuthService {
  private isLoggedIn: boolean = false;
  private redirectUrl: string;
  private url: string;
  private headers: Headers;

  constructor(private http: Http) {
    this.url = 'http://localhost:3000/users/login';
    this.headers = new Headers({'Content-Type': 'application/json'});
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.url, {email: email, password: password}, this.headers)
    .map(response => {
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
