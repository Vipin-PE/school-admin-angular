import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private fb:FormBuilder) {}

  ngOnInit() {
      this .loginForm = this.fb.group({
      email:['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
      passWord:['', [Validators.required, Validators.minLength(7)]]
    })
  }

  hasError(controlName: string, errorName: string) {
    return this.loginForm.controls[controlName].hasError(errorName) &&
           this.loginForm.controls[controlName].touched;
  }

  submit() {
    if(this.loginForm.valid) {
      console.log(this.loginForm.value);
    }else {
      console.log('Invalid');
    }
    this.loginForm.markAllAsTouched();
  }

}
