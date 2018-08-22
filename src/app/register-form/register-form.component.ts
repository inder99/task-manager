import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  model:any = {};
  // regForm :  FormGroup;
  regForm : FormGroup;
  constructor(
    private builder : FormBuilder
  ) { }

  ngOnInit() {
    // this.regForm= new FormGroup({
    //   name : new FormControl('inder'),
    //   email : new FormControl(''),
    //   password :  new FormControl(''),
    //   confPassword :  new FormControl('')
    // });
    this.addRegForm();
  }
  addRegForm(){
    this.regForm = this.builder.group({
      name : 'inder',
      email : '',
      password : '',
      confPassword : ''
    })
  }
}
