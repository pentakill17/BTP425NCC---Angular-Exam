/*
RENIEL PAUL BUNAG
*/
import { AuthService } from '../auth-service'
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user: User;
  public error: string;

  constructor(private authorize: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user = new User();
  }

  validate(myForm: NgForm): void {
    this.authorize.login(this.user).subscribe(
      (res) => {
        // the token for JWT
        localStorage.setItem('access_token', res.token);
        // navigate to the link
        this.router.navigate(['/contactus']); 
      }, (err) => {this.error = err.error.message;});}
}
