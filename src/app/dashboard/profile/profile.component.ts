import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { Message } from 'primeng/primeng';
import { UserForm } from 'app/dashboard/userForm';
import { User } from 'app/log-in/user';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private msgs: Message[];
  private profileForm: UserForm;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.profileForm = new UserForm(fb, this.userService.getUser());
  }



  ngOnInit() {
    // this.userService.updateUser(new User('me@mail.com'))
    //   .subscribe(res => {
    //     console.log(res);
    //   })
  }

  onSubmit() {

  }

}
