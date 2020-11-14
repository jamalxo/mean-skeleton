import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../@core/service/auth/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'tos-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private userService: UserService,
              private router: Router) { }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const user = {
      email: this.f.email.value,
      password: this.f.password.value
    }

    this.userService.userLogIn(user)
      .subscribe(
        data => {
          this.router.navigate(['overview']);
        },
        error => {
          console.log(error)
        });
  }
}
