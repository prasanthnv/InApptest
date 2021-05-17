import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getLoggedUser(){
    let logged = JSON.parse(localStorage.getItem('loggeduser') || '')
    let users = JSON.parse(localStorage.getItem('users') || '{}');
    return users[logged];
  }

  saveProfile(user:User){
    let users = JSON.parse(localStorage.getItem('users') || '{}');
    users[user.email] = user;
    localStorage.setItem('loggeduser', JSON.stringify(user.email));
    localStorage.setItem('users', JSON.stringify(users));
  }
}
