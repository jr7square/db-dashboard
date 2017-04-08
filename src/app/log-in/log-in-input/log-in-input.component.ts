import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'app/auth.service';
import { User } from '../user';

@Component({
  selector: 'log-in-input',
  templateUrl: './log-in-input.component.html',
  styleUrls: ['./log-in-input.component.css']
})
export class LogInInputComponent implements OnInit {

   user: User;

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {
     this.user = new User();
  }

  ngOnInit() {

  }

  onSubmit() {
    this.authService.login(this.user).subscribe(val => this.router.navigate(['/dashboard']));
  }

  //get diagnostic() { return JSON.stringify(this.user)}

}
