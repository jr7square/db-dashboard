import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SearchService } from 'app/services/search.service';
import { Host } from 'app/dashboard/host';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-host-details',
  templateUrl: './host-details.component.html',
  styleUrls: ['./host-details.component.css']
})
export class HostDetailsComponent implements OnInit {
  private host: Host;

  constructor(private route: ActivatedRoute, private router: Router, private searchService: SearchService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let hostIndex = +params['index'];
      this.host = this.searchService.getSearchResults(hostIndex);
    });
  }

  backToSearch(): void {
    this.router.navigate(['/dashboard/search']);
  }

  get diagnostic() {
    return JSON.stringify(this.host);
  }

}
