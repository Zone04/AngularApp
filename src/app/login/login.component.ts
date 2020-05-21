import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;

  buttonText = 'Login';

  constructor(
    private authService: AuthService,
    private alertService: AlertService
  ) {
    this.loginForm = new FormGroup({
      user: new FormControl(null, [Validators.required]),
      passwd: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data) {
    if (this.loginForm.valid) {
      this.buttonText = 'Loading...';
      this.authService.login(data.user, data.passwd).subscribe(
        _ => {
          this.buttonText = 'Login';
        }
      );
      this.loginForm.reset();
    } else {
      this.alertService.alert('Incomplete form.');
    }
  }

}
