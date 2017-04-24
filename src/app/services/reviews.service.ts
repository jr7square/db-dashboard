import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from 'environments/environment';
import { Review } from 'app/dashboard/review';

@Injectable()
export class ReviewsService {
  private readonly url: string;
  private readonly headers: Headers;

  constructor(private http: Http) {
    this.url = `${environment.baseUrl}/reviews`;
    this.headers = new Headers({'Content-Type': 'application/json'});
  }

  getHostReviews(hostEmail: string): Observable<Review[]> {
    const getReviewsUrl = `${this.url}?hostEmail=${hostEmail}`;
    return this.http.get(getReviewsUrl)
      .map(response => {
        const jsonRes = response.json();
        if(jsonRes.reviewsAvailable) {
          return this.responseToReviews(jsonRes.reviews);
        }
        else return [];
      });
  }

  newReview(review: Review): Observable<any> {
    const newReviewUrl = `${this.url}/new`;
    return this.http.post(newReviewUrl, review.encode(), this.headers)
      .map(response => response.json());
  }

  responseToReviews(reviews: any): Review[] {
    return reviews.map(review => {
      return new Review(
        review.trip_id,
        review.host_email,
        review.rating,
        review.comment,
        review.date
      );
    });
  }

}
