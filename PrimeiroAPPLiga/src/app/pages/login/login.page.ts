import { LoginPayload } from './../../models/payloads/login.payload';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginPayload: LoginPayload = {
    email: '',
    password: ''
  };

  constructor() { }

  public ngOnInit(): void {
  }

  public login(): void {
    console.log(this.loginPayload);
  }

}
