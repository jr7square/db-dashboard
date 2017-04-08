import { Injectable } from '@angular/core';
import { User } from 'app/log-in/user';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;

  redirectUrl: string;

  constructor() { }

  login(user): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => {
      if(user.username === 'admin' && user.password === 'password')
        this.isLoggedIn = true;
    });
  }

  logout(): void {
    this.isLoggedIn = false;
  }

}
