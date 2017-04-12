import { Injectable } from '@angular/core';
import { User } from 'app/log-in/user';
import { Http, Headers } from '@angular/http';

@Injectable()
export class UserService {
  private user: User;

  constructor(private http: Http) { }



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


}
