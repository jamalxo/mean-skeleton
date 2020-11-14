import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../@core/service/auth/user.service";
import {Router} from "@angular/router";
import {ModalDismissReasons, NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'tos-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(public activeModal: NgbActiveModal,
              private userService: UserService,
              private router: Router) {
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    const user = {
      username: this.f.username.value,
      email: this.f.email.value,
      password: this.f.password.value
    }

    this.userService.userSignUp(user)
      .subscribe(
        data => {
          this.router.navigate(['overview']);
        },
        error => {
          console.log(error)
        });
    // close modal
    this.activeModal.close('Save click');
  }

}
