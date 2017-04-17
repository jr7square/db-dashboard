import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Message } from 'primeng/primeng';
import { User } from 'app/log-in/user';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  private msgs: Message[];
  private userForm: FormGroup;
  private newUser: User;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.msgs = [];
  }

  ngOnInit() {
    this.createForm();
  }

  submitForm(): void {
    this.newUser = this.userFormToUser()
    this.userService.registerUser(this.newUser)
      .subscribe(response => {
        if(response.success) this.showSubmit();
        else if(response.taken) this.showTaken();
      });
  }

  showTaken(): void {
    this.msgs.push({severity: 'info', summary: 'Email Taken', detail: 'User with the provided email already exists'});
  }

  showSubmit(): void {
    this.msgs.push({severity:'success', summary:'Submitted', detail:'Registration Successful'});
  }

  validForm(controlName: string): boolean {
    return !this.userForm.controls[controlName].valid && this.userForm.controls[controlName].dirty
  }

  checkPassword(): boolean {
    return this.userForm.controls['password'].value != this.userForm.controls['confirmPass'].value;
  }


  createForm(): void {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPass: ['', Validators.required],
      phone: '',
      city: '',
      country: '',
      address: ''
    });
  }

  userFormToUser(): User {
    return new User(
      this.userForm.controls['email'].value,
      this.userForm.controls['password'].value,
      this.userForm.controls['phone'].value,
      this.userForm.controls['city'].value,
      this.userForm.controls['country'].value,
      this.userForm.controls['address'].value,
      this.userForm.controls['firstName'].value,
      this.userForm.controls['lastName'].value
    );
  }

  get diagnostic() {
    return JSON.stringify(this.userForm.value);
  }

}
