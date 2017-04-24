import { ReviewJSON } from 'app/utils/review-json';

export class Review {
  private _tripId: number;
  private _hostEmail: string;
  private _rating: number;
  private _comment: string;
  private _date: Date;

  constructor(tripId: number, hostEmail: string, rating: number, comment: string, date: string) {
    this._tripId = tripId
    this._hostEmail = hostEmail;
    this._rating = rating;
    this._comment = comment;
    this._date = new Date(date);
  }

  get hostEmail(): string {
    return this._hostEmail;
  }

  get rating(): number {
    return this._rating;
  }

  get comment(): string {
    return this._comment;
  }

  get date(): Date {
    return this._date;
  }

  encode(): ReviewJSON {
    return Object.assign({}, {
      tripId: this._tripId,
      hostEmail: this._hostEmail,
      rating: this._rating,
      reviewContent: this._comment,
      date: this._date.toLocaleDateString()
    });
  }
}
