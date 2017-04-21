import { TripJSON } from 'app/utils/trip-json';

export class Trip {
  private _tripId: string;
  private _hostEmail: string;
  private _touristEmail: string;
  private _city: string;
  private _country: string;
  private _startDate: string;
  private _endDate: string;

  constructor(hostEmail: string, touristEmail: string, startDate: string, endDate: string,
              city: string, country: string, tripId?: string )
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

  encode(): TripJSON {
    return Object.assign({}, {
      tripId: this._tripId,
      hostEmail: this._hostEmail,
      touristEmail: this._touristEmail,
      city: this._city,
      country: this._country,
      startDate: this._startDate,
      endDate: this._endDate
    });
  }



}
