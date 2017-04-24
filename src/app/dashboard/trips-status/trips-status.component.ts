import { Component, OnInit } from '@angular/core';
import {Trip} from "../trip";
import {Review} from "../review";
import { TripsService } from 'app/services/trips.service';
import { User } from 'app/log-in/user';
import { UserService } from 'app/services/user.service';



@Component({
  selector: 'app-trips-status',
  templateUrl: './trips-status.component.html',
  styleUrls: ['./trips-status.component.css']
})
export class TripsStatusComponent implements OnInit {
  private curTrip: Trip;
  private futureTrips: Trip[];
  private leaveReview: Review;
  private user: User;
  private error: boolean;
  private success: boolean;
  private curFound: boolean;
  private futFound: boolean;
  private revFound: boolean;


  constructor(private tripsService: TripsService, private userService: UserService) { }

  ngOnInit() {
    this.curTrip = new Trip();
    this.futureTrips = [];
    this.user = this.userService.getUser();
    this.tripsService.getUserTrips(this.user.email)
    .subscribe(response => {
      console.log(response)
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
            response.trips.currentTrip[0].start_date,
            response.trips.currentTrip[0].end_date,
            response.trips.currentTrip[0]['city'],
            response.trips.currentTrip[0].country
          );
          console.log(this.curTrip)
        } else {
          // no current trip
        }
        if (this.futFound){
          // future trips booked
        }
        this.futureTrips = response.trips.futureTrips;
        console.log(this.futureTrips);
        } else {
          // no future trips booked
        }
        if (this.revFound){
          // pending reviews
          this.leaveReview = response.trips.currentReviews;

        } else {
          // no reviews pending
        }


    });
  }

}
