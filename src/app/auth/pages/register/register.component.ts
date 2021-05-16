import { AuthService } from '../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  formSubmitted = false;
  userExist = false;
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
  name: string = 'qe';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  register() {
    this.formSubmitted = true;
    if (this.registerForm?.valid) {
      this.authService
        .registerUser({
          name: this.registerForm.value.name,
          email: this.registerForm.value.email,
          password: this.registerForm.value.password,
        })
        .subscribe(
          (msg) => {
            this.userExist = false;
            console.log(msg);
          },
          (err) => {
            this.userExist = true;
          }
        );
    }
  }
}
