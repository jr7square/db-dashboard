import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {


  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/login']);

  }

}
