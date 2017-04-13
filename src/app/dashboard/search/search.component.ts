import { Component, OnInit } from '@angular/core';
import { SearchService } from 'app/services/search.service';
import { Host } from 'app/dashboard/host';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private searchResults: Host[];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.searchByCityDate('Tampa', '2017-05-07', '2017-05-08')
      .subscribe(hosts => {
        this.searchResults = hosts;
      })
  }

  get diagnostic() {
    return JSON.stringify(this.searchResults);
  }

}
