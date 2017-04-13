export class Host {
  private _email: string;
  private _city: string;
  private _country: string;
  private _startDate: string;
  private _bio: string;
  private _firstName: string;
  private _lastName: string;
  private _rating: number;

  constructor(email: string, city: string, country: string, startDate: string,
              bio: string, firstName: string, lastName: string, rating: number)
  {
    this._email = email;
    this._city = city;
    this._country = country;
    this._startDate = startDate;
    this._bio = bio;
    this._firstName = firstName;
    this._lastName = lastName;
    this._rating = rating;
  }

  get email(): string {
    return this._email;
  }

  get city(): string {
    return this._city;
  }

  get country(): string {
    return this._country;
  }

  get startDate(): string {
    return this._startDate;
  }

  get bio(): string {
    return this._bio;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get rating(): number {
    return this._rating;
  }

}
