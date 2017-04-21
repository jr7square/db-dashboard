import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SearchService } from 'app/services/search.service';
import { TripsService } from 'app/services/trips.service';
import { UserService } from 'app/services/user.service';
import { Host } from 'app/dashboard/host';
import { Trip } from 'app/dashboard/trip';
import { User } from 'app/log-in/user';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-host-details',
  templateUrl: './host-details.component.html',
  styleUrls: ['./host-details.component.css']
})
export class HostDetailsComponent implements OnInit {
  private host: Host;
  private user: User;
  private bookStartDate: string;
  private bookEndDate: string;
  private invalidTrip: boolean;
  private bookedTrip: boolean;

  constructor(private route: ActivatedRoute, private router: Router,
              private searchService: SearchService,
              private userService: UserService,
              private tripsService: TripsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let hostIndex = +params['index'];
      this.host = this.searchService.getSearchResults(hostIndex);
      this.user = this.userService.getUser();
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
    this.tripsService.bookTrip(trip).subscribe(response => {
      this.invalidTrip = response.invalidTrip;
      this.bookedTrip = response.tripBooked;
      if (!this.invalidTrip){
        // trip is booked
        this.router.navigate(['/dashboard/search']);
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

}
