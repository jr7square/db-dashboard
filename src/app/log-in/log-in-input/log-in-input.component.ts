import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'app/auth.service';
import { UserService } from 'app/services/user.service';
import { User } from '../user';

@Component({
  selector: 'log-in-input',
  templateUrl: './log-in-input.component.html',
  styleUrls: ['./log-in-input.component.css']
})
export class LogInInputComponent implements OnInit {
   private userEmail: string;
   private userPassword: string;

  constructor(private route: ActivatedRoute, private router: Router,
              private authService: AuthService, private userService: UserService) {
  }

  ngOnInit() {

  }

  onSubmit() {

    this.authService.login(this.userEmail, this.userPassword).subscribe(response => {
      console.log(response);
      let user: User =  new User(
        response.user.email,
        response.user.password,
        response.user.phone,
        response.user.city,
        response.user.country,
        response.user.address
      );
      this.userService.setUser(user);
      this.router.navigate(['/dashboard'])
    }

    );
  }

  //get diagnostic() { return JSON.stringify(this.user)}

}
