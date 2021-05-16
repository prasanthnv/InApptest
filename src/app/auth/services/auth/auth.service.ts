import { RegisterResponse } from './../../models/register.response';
import { LoginResponse } from './../../models/login.response';
import { User } from './../../../shared/models/user.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  registerUser(user: User): Observable<RegisterResponse> {
    return new Observable((observer) => {
      let users = JSON.parse(localStorage.getItem('users') || '{}');

      if (user.email in users) {
        observer.error({
          error: 'User already exists',
        });
      } else {
        users[user.email] = user;
        localStorage.setItem('users', JSON.stringify(users));
        observer.next({
          success: true,
        });
      }
    });
  }

  login(email: string, password: string): Observable<LoginResponse> {
    return new Observable((observer) => {
      let users = JSON.parse(localStorage.getItem('users') || '{}');
      if (email in users) {
        if (users[email]['password'] == password) {
          localStorage.setItem('loggeduser', JSON.stringify(email));
          observer.next({
            success: true,
          });
        } else {
          observer.next({
            success: false,
            error: 'Wrong password !!',
          });
        }
      } else {
        observer.error({
          success: false,
          error: `User does n't exisit`,
        });
      }
    });
  }
}
