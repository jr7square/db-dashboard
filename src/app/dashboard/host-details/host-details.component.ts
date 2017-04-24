import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SearchService } from 'app/services/search.service';
import { TripsService } from 'app/services/trips.service';
import { UserService } from 'app/services/user.service';
import { ReviewsService } from 'app/services/reviews.service';
import { Message } from 'primeng/primeng';
import { Host } from 'app/dashboard/host';
import { Trip } from 'app/dashboard/trip';
import { User } from 'app/log-in/user';
import { Review } from 'app/dashboard/review';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-host-details',
  templateUrl: './host-details.component.html',
  styleUrls: ['./host-details.component.css']
})
export class HostDetailsComponent implements OnInit {
  private host: Host;
  private user: User;
  private reviews: Review[];
  private bookStartDate: string;
  private bookEndDate: string;
  private invalidTrip: boolean;
  private bookedTrip: boolean;
  private tripTaken: boolean;
  private msgs: Message [];

  constructor(private route: ActivatedRoute, private router: Router,
              private searchService: SearchService,
              private userService: UserService,
              private tripsService: TripsService,
              private reviewsService: ReviewsService) {

    this.reviews = [];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let hostIndex = +params['index'];
      this.host = this.searchService.getSearchResults(hostIndex);
      this.user = this.userService.getUser();
      this.reviewsService.getHostReviews(this.host.email)
        .subscribe(reviews => this.reviews = reviews);
    });

  }

  onSubmit(){
    let trip: Trip =  new Trip(
      this.host.email,
      this.user.email,
      this.bookStartDate,
      this.bookEndDate,
      this.host.city,
      this.host.country
    );
    this.tripsService.bookTrip(trip)
      .subscribe(response => {
        this.msgs = [];
        this.invalidTrip = response.invalidTrip;
        this.bookedTrip = response.tripBooked;
        this.tripTaken = response.tripTaken;
        if (this.bookedTrip){
        // trip is booked
          this.msgs.push({
            severity: 'success',
            summary: 'Success',
            detail: 'Trip has being booked!'
          });
        // this.router.navigate(['/dashboard/search']);
        }
        else if(this.tripTaken){
          this.msgs.push({
            severity: 'warn',
            summary: 'Date Taken',
            detail: 'Trip could not be book due to conflicting dates'
          });
        }
    });
  }

  backToSearch(): void {
    this.router.navigate(['/dashboard/search']);
  }

  get bookDiagnostic() {
    return JSON.stringify({
      startDate: this.bookStartDate,
      endDate: this.bookEndDate})
  }

  get reviewDiagnostic() {
    return JSON.stringify(this.reviews);
  }

}
