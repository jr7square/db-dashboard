import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { Message } from 'primeng/primeng';
import { User } from 'app/log-in/user';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private msgs: Message[];
  private user: User;
  private changeEmailForm: FormGroup;
  private changePasswordForm: FormGroup;
  private emailTaken: boolean;
//  private profileForm: UserForm;

  constructor(private fb: FormBuilder, private userService: UserService) {
  //  this.profileForm = new UserForm(fb, this.userService.getUser());
    this.msgs = [];
    this.emailTaken = false;
    this.user = this.userService.getUser().copy();
    this.changeEmailForm = fb.group({
      newEmail: ['', Validators.required],
      confirmNewEmail: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.changePasswordForm = fb.group({
      currentPass: ['', Validators.required],
      newPass: ['', Validators.required],
      confirmNewPass: ['', Validators.required]
    });
  }

  ngOnInit() {
    // this.userService.updateUser(new User('me@mail.com'))
    //   .subscribe(res => {
    //     console.log(res);
    //   })
  }

  submitEmail() {
    if(!this.changeEmailForm.controls['newEmail'].valid){
    }

  }

  submitPassword() {

  }

  validEmailsMatch(): boolean {
    return this.changeEmailForm.controls['newEmail'].value !=
       this.changeEmailForm.controls['confirmNewEmail'].value &&
       this.changeEmailForm.controls['newEmail'].dirty &&
       this.changeEmailForm.controls['confirmNewEmail'].dirty;
  }

  changeEmailValidateAllInputs(): boolean {
    return this.validateChangeEmail('newEmail') ||
           this.validateChangeEmail('confirmNewEmail') ||
           this.validateChangeEmail('password');
  }

  newPasswordsMatch(): boolean {
    return this.changePasswordForm.controls['newPass'].value !=
           this.changePasswordForm.controls['confirmNewPass'].value
           && this.changePasswordForm.controls['newPass'].dirty
           && this.changePasswordForm.controls['confirmNewPass'].dirty
  }

  newPassValidateAllInputs(): boolean {
    return this.validateChangePass('currentPass') ||
           this.validateChangePass('newPass') ||
           this.validateChangePass('confirmNewPass');
  }

  private validateChangeEmail(controlName: string): boolean {
    return !this.changeEmailForm.controls[controlName].valid &&
       this.changeEmailForm.controls[controlName].dirty;
  }

  private validateChangePass(controlName: string): boolean {
    return !this.changePasswordForm.controls[controlName].valid &&
            this.changePasswordForm.controls[controlName].dirty;
  }

  get emailDiagnosis() {
    return JSON.stringify(this.changeEmailForm.value);
  }

  get passwordDiagnosis() {
    return JSON.stringify(this.changePasswordForm.value);
  }

}
