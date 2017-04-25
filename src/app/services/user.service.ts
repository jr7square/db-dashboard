import { Injectable } from '@angular/core';
import { User } from 'app/log-in/user';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from 'environments/environment';

@Injectable()
export class UserService {
  private user: User;
  private readonly url: string
  private readonly headers: Headers;

  constructor(private http: Http) {
    this.user = new User();
    this.url = environment.baseUrl;
    this.headers = new Headers({'Content-Type': 'application/json'});
  }

  updateUserEmail(formValues: any): Observable<any> {
    const updateEmailUrl = `${this.url}/users/update/email`;
    const requestBody = {email: formValues.email, newEmail: formValues.newEmail, password: formValues.password};
    return this.http.put(updateEmailUrl, requestBody, this.headers)
      .map(response => response.json());
  }

  updateUserPassword(formValues: any): Observable<any> {
    const updatePasswordUrl = `${this.url}/users/update/password`;
    const requestBody = {
      email: formValues.email,
      newPassword: formValues.newPassword,
      password: formValues.currentPassword };
    return this.http.put(updatePasswordUrl, requestBody, this.headers)
      .map(response => response.json());
  }

  registerUser(user: User): Observable<any> {
    const registerUrl = `${this.url}/users/register`;
    return this.http.post(registerUrl, user.encode(), this.headers)
      .map(response => response.json());
  }

  getUser(): User {
    return this.user;
  }

  destroyUser() {
    this.user = new User();
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
