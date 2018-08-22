import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  model : any = {

  }
  constructor() { }

  submitLogin(loginForm){
    console.log("loginForm",loginForm);
  }
  ngOnInit() {
  }

}
