import { FormControl,
         FormGroup,
         FormBuilder,
         Validators} from '@angular/forms';
import { User } from 'app/log-in/user';

export class UserForm {
  private userForm: FormGroup;

  constructor(private fb: FormBuilder, private user: User) {
    console.log(user);
    this.userForm = fb.group({
      firstName: [user.firstName, Validators.required],
      lastName: [user.lastName, Validators.required],
      email: [user.email, Validators.required],
      password: [user.password, Validators.required],
      confirmPass: [user.password, Validators.required],
      phone: user.phone,
      city: user.city,
      country: user.country,
      address: user.address
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

  validForm(controlName: string): boolean {
    return !this.userForm.controls[controlName].valid && this.userForm.controls[controlName].dirty
  }

  checkPassword(): boolean {
    return this.userForm.controls['password'].value != this.userForm.controls['confirmPass'].value;
  }

  get diagnostic() {
    return JSON.stringify(this.userForm.value);
  }



}
