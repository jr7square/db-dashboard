import { Component, OnInit } from '@angular/core';
import { SearchService } from 'app/services/search.service';
import { Router } from '@angular/router';
import { Host } from 'app/dashboard/host';
import {equal} from "assert";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private searchResults: Host[];
  private searchCity: string;
  private searchCountry: string;
  private searchStartDate: string;
  private searchEndDate: string;

  constructor(private router: Router, private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchResults = this.searchService.getAllResults();
  }

  onSubmit() {
    if (this.searchCity != null && (this.searchCountry == null || this.searchCountry == '') &&
        (this.searchStartDate == null || this.searchStartDate == '')  &&
        (this.searchEndDate == null ||this.searchEndDate == '')){
      this.searchService.searchByCity(this.searchCity)
        .subscribe(hosts => {
          this.searchResults = hosts;
        })
    } else if ((this.searchCity == null || this.searchCity == '') && this.searchCountry != null &&
              (this.searchStartDate == null || this.searchStartDate == '') &&
              (this.searchEndDate == null || this.searchEndDate == '')){
      this.searchService.searchByCountry(this.searchCountry)
        .subscribe(hosts => {
          this.searchResults = hosts;
        })
    } else if (this.searchCity != null && this.searchCountry != null && this.searchStartDate == null && this.searchEndDate == null){
      this.searchService.searchByCityCountry(this.searchCity, this.searchCountry)
        .subscribe(hosts => {
          this.searchResults = hosts;
        })
    } else if (this.searchCity != null && (this.searchCountry == null || this.searchCountry == '') &&
              this.searchStartDate != null && this.searchEndDate != null){
      this.searchService.searchByCityDate(this.searchCity, this.searchStartDate, this.searchEndDate)
        .subscribe(hosts => {
          this.searchResults = hosts;
        })
    } else if ((this.searchCity == null || this.searchCity == '') && this.searchCountry != null && this.searchStartDate != null && this.searchEndDate != null){
      this.searchService.searchByCountryDate(this.searchCountry, this.searchStartDate, this.searchEndDate)
        .subscribe(hosts => {
          this.searchResults = hosts;
        })
    } else if (this.searchCity != null && this.searchCountry != null && this.searchStartDate != null && this.searchEndDate != null){
      this.searchService.searchByCityCountryDate(this.searchCity, this.searchCountry, this.searchStartDate, this.searchEndDate)
        .subscribe(hosts => {
          this.searchResults = hosts;
        })
    }
  }

  showHostDetails(index: number): void {
    this.router.navigate(['dashboard/host-detail', index]);
  }

  get searchDiagnostic() {
    return JSON.stringify({city: this.searchCity,
      country: this.searchCountry,
      startDate: this.searchStartDate,
      endDate: this.searchEndDate})
  }

}
