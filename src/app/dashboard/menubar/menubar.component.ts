import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';
import { UserService } from 'app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {


  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
  }

  logOut() {
    this.authService.logout();
    this.userService.destroyUser();
    this.router.navigate(['/dashboard']);

  }

}
