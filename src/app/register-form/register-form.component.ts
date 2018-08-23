import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { symbolValidator, passwordMatch } from '../validators/global-validator';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {
  model:any = {};
  // regForm : FormGroup;
  regForm : FormGroup;
  constructor(
    private builder : FormBuilder
  ) { }

  ngOnInit() {
    this.addRegForm();
  }
  addRegForm(){
    this.regForm = this.builder.group({
      name : ['',Validators.required],
      email : ['',Validators.compose([Validators.required,Validators.email])],
      password : ['', Validators.compose([Validators.required, symbolValidator])],
      confPassword : ''
    },{
      validator : passwordMatch
    })
    console.log(this.regForm.get('email'));
  }
}
