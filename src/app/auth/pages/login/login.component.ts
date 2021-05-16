import { LoginResponse } from './../../models/login.response';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formSubmitted = false;
  loginError = '';
  loginForm = new FormGroup({
    password: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  ngOnInit(): void {}

  login() {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe(
          (res) => {
            this.router.navigate(['/user'])
          },
          (err: LoginResponse) => {
            this.loginError = err?.error as string;
          }
        );
    }
  }
}
