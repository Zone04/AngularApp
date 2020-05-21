import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;

  buttonText = 'Register';

  constructor(
    private authService: AuthService,
    private alertService: AlertService
  ) {
    this.registerForm = new FormGroup({
      user: new FormControl(null, [Validators.required]),
      passwd: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data) {
    if (this.registerForm.valid) {
      this.buttonText = 'Loading...';
      this.authService.register(data.user, data.passwd).subscribe(
        _ => {
          this.buttonText = 'Register';
        }
      );
      this.registerForm.reset();
    } else {
      this.alertService.alert('Incomplete form.');
    }
  }

}
