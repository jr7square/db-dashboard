import { Component, OnInit } from '@angular/core';
import { SearchService } from 'app/services/search.service';
import { Router } from '@angular/router';
import { Host } from 'app/dashboard/host';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private searchResults: Host[];

  constructor(private router: Router, private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.searchByCityDate('Tampa', '2017-05-07', '2017-05-08')
      .subscribe(hosts => {
        this.searchResults = hosts;
      })
  }

  showHostDetails(index: number): void {
    this.router.navigate(['dashboard/host-detail', index]);
  }

  get diagnostic() {
    return JSON.stringify(this.searchResults);
  }

}
