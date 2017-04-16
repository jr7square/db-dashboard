export class Trip {
  private _tripId: string;
  private _hostEmail: string;
  private _touristEmail: string;
  private _city: string;
  private _country: string;
  private _startDate: string;
  private _endDate: string;

  constructor(tripId: string, hostEmail: string, touristEmail: string,
              city: string, country: string, startDate: string, endDate: string)
  {
    this._tripId = tripId;
    this._hostEmail = hostEmail;
    this._touristEmail = touristEmail;
    this._city = city;
    this._country = country;
    this._startDate = startDate;
    this._endDate = endDate;
  }

  get tripId(): string {
    return this._tripId;
  }

  get hostEmail(): string {
    return this._hostEmail;
  }

  get touristEmail(): string {
    return this._touristEmail;
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

  get endDate(): string {
    return this._endDate;
  }

}
