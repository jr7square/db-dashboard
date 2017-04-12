export class User {
   private _email: string;
   private _password: string;
   private _phone: string;
   private _city: string;
   private _country: string;
   private _address: string;


   constructor(email?: string, password?: string, phone?: string,
              city?: string, country?: string, address?: string) {
      this._email = email;
      this._password = password;
      this._phone = this.phone;
      this._city = city;
      this._country = country;
      this._address = address;
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

}
