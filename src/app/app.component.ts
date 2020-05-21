import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Security review';
  loginStatus = false;

  constructor(
    private authService: AuthService
  ) {
    this.authService.loginStatus.subscribe(
      status => this.loginStatus = status
    );
  }

  logout(): void {
    this.authService.logout();
  }

}
