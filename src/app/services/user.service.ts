import { Injectable } from '@angular/core';
import { User } from 'app/log-in/user';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  private user: User;
  private readonly url: string
  private readonly headers: Headers;

  constructor(private http: Http) {
    this.user = new User();
    this.url = 'http://localhost/user';
    this.headers = new Headers({'Content-Type': 'application/json'});
  }

  updateUser(editedUser: User): Observable<boolean> {
    return this.http.post(this.url, editedUser.encode(), this.headers)
      .map(response => {
        let jsonRes = response.json();
        if(jsonRes.success) return true;
        else return false;
      });
  }

  getUser(): User {
    return this.user;
  }

  setUser(user: User): void {
    this.user = user;
  }

  setUserEmail(email: string): void {
    this.user.email = email;
  }

  setUserPassword(password: string): void {
    this.user.password = password;
  }

  setUserPhone(phone: string): void {
    this.user.phone = phone;
  }

  setUserCity(city: string): void {
    this.user.city = city;
  }

  setUserCountry(country: string): void {
    this.user.country = country;
  }

  setUserAddress(address: string): void {
    this.user.address = address;
  }

  setUserFirstName(fName: string): void {
    this.user.firstName = fName;
  }

  setUserLastName(lName: string): void {
    this.user.lastName = lName;
  }


}
