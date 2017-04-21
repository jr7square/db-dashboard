import { UserJSON } from 'app/utils/UserJSON';

export class User {
   private _email: string;
   private _password: string;
   private _phone: string;
   private _city: string;
   private _country: string;
   private _address: string;
   private _firstName: string;
   private _lastName: string;


   constructor(email?: string, password?: string, phone?: string,
              city?: string, country?: string, address?: string,
              firstName?: string, lastName?: string) {
      this._email = email;
      this._password = password;
      this._phone = phone;
      this._city = city;
      this._country = country;
      this._address = address;
      this._firstName = firstName;
      this._lastName = lastName;
   }

   encode(): UserJSON {
     return Object.assign({}, {
       email: this._email,
       password: this._password,
       phone: this._phone,
       city: this._city,
       country: this._country,
       address: this._address,
       firstName: this._firstName,
       lastName: this._lastName
     });
   }

   copy(): User {
     return new User(
       this._email,
       this._password,
       this._phone,
       this._city,
       this._country,
       this._address,
       this._firstName,
       this._lastName
     );
   }

   get email(): string {
     return this._email;
   }

   get password(): string {
     return this._password;
   }

   get phone(): string {
     return this._phone;
   }

   get city(): string {
     return this._city;
   }

   get country(): string {
     return this._country;
   }

   get address(): string {
     return this._address;
   }

   get firstName(): string {
     return this._firstName;
   }

   get lastName(): string {
     return this._lastName;
   }

   set email(email: string) {
     this._email = email;
   }

   set password(password: string) {
     this._password = password;
   }

   set phone(phone: string) {
     this._phone = phone
   }

   set city(city: string) {
     this._city = city;
   }

   set country(country: string) {
     this._country = country;
   }

   set address(address: string) {
     this._address = address;
   }

   set firstName(fName: string) {
     this._firstName = fName;
   }

   set lastName(fName: string) {
     this._lastName = fName;
   }

}
