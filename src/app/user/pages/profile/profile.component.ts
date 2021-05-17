import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  formSubmitted = false;
  userExist = false;
  user:User | undefined;
  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('^([a-zA-Z0-9 _-]+)$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^([a-zA-Z0-9 _-]+)$'),
      Validators.maxLength(20),
      Validators.minLength(6),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user= this.userService.getLoggedUser();
    this.registerForm.patchValue({
      name: this.user?.name,
      password: this.user?.password,
      email:this.user?.email
    })
  }

  register() {
    this.formSubmitted = true;
    if (this.registerForm?.valid) {
      this.userService
      .saveProfile({
        name: this.registerForm.value.name,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
      });
    }
  }
}
