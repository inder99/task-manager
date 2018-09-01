import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  model : any = {

  }
  constructor(
    private router : Router
  ) { }

  submitLogin(loginForm){
    console.log("loginForm",loginForm);
    if(this.model.username === 'admin' && this.model.password === 'admin'){
            this.router.navigate(['/tasks']);
    }

  }
  ngOnInit() {
  }

}
