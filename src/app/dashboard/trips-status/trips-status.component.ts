import { Component, OnInit } from '@angular/core';
import { Trip } from "../trip";
import { Review } from "../review";
import { User } from 'app/log-in/user';
import { UserService } from 'app/services/user.service';
import { TripsService } from 'app/services/trips.service';
import { ReviewsService } from 'app/services/reviews.service';
import { AuthService } from 'app/auth.service';

import * as moment from 'moment';



@Component({
  selector: 'app-trips-status',
  templateUrl: './trips-status.component.html',
  styleUrls: ['./trips-status.component.css']
})
export class TripsStatusComponent implements OnInit {
  private curTrip: Trip;
  private futureTrips: Trip[];
  private user: User;
  private error: boolean;
  private success: boolean;
  private curFound: boolean;
  private futFound: boolean;
  private revFound: boolean;
  private rating: number;
  private reviewComment: string;


  constructor(private tripsService: TripsService,
              private userService: UserService,
              private reviewsService: ReviewsService,
              private authService: AuthService) { }

  ngOnInit() {
    this.curTrip = new Trip();
    this.futureTrips = [];
    this.user = this.userService.getUser().copy();
    this.tripsService.getUserTrips(this.user.email)
    .subscribe(response => {
      console.log(response);
      this.error = response.error;
      this.success = response.success;
      if (this.error){
        // error
      }
      if (this.success){
        // success
        this.curFound = response.trips.currentTripFound;
        this.futFound = response.trips.futureTripsFound;
        this.revFound = response.trips.currentTripReviewsFound;
        if (this.curFound){
          // trip found
          this.curTrip = new Trip(
            response.trips.currentTrip[0].host_email,
            response.trips.currentTrip[0].tourist_email,
            moment(response.trips.currentTrip[0].start_date).format('LL'),
            moment(response.trips.currentTrip[0].end_date).format('LL'),
            response.trips.currentTrip[0].city,
            response.trips.currentTrip[0].country,
            response.trips.currentTrip[0].trip_id,
          );
          console.log(this.curTrip)
        } else {
          // no current trip
        }
        if (this.futFound){
          // future trips booked
          this.futureTrips = this.jsonToTripsArray(response.trips.futureTrips);
          console.log(this.futureTrips);
        }

        } else {
          // no future trips booked
        }
    });
  }

  submitReview() {
    const review = {
      tripId: this.curTrip.tripId,
      hostEmail: this.curTrip.hostEmail,
      touristEmail: this.curTrip.touristEmail,
      rating: this.rating,
      reviewContent: this.reviewComment,
      date: moment().format('YYYY-MM-DD')
    }
    console.log(review);
    this.reviewsService.newReview(review)
      .subscribe(response => {
        console.log(response);
      });
  }

  jsonToTripsArray(trips: any): Trip[] {
    return trips.map(trip => {
      return new Trip(
        trip.host_email,
        trip.tourist_email,
        moment(trip.start_date).format('LL'),
        moment(trip.end_date).format('LL'),
        trip.city,
        trip.country,
        trip.trip_id
      );
    });
  }

}
