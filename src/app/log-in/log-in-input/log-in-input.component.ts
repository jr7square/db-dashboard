import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'log-in-input',
  templateUrl: './log-in-input.component.html',
  styleUrls: ['./log-in-input.component.css']
})
export class LogInInputComponent implements OnInit {

   user: User;

  constructor() {
     this.user = new User();
  }

  ngOnInit() {

  }

  onSubmit() {
     alert(JSON.stringify(this.user))
  }

  //get diagnostic() { return JSON.stringify(this.user)}

}
