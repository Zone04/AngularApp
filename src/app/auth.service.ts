import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loginStatus: BehaviorSubject<boolean>;
  private users = [
    { user: 'Enzo', passwd: 'password' }
  ];

  constructor(
    private alertService: AlertService
  ) {
    this.loginStatus = new BehaviorSubject<boolean>(false);
  }

  login(userInput: string, passwdInput: string): Observable<boolean> {

    let userExists = false;
    this.users.forEach(user => {
      if (user.user === userInput && user.passwd === passwdInput) {
        userExists = true;
      }
    });

    return of(userExists)
      .pipe(
        delay(1000),
        tap(val => {
          this.loginStatus.next(val);
          if (val){
            this.alertService.alert('Login successful');
          } else {
            this.alertService.alert('Could not login');
          }
        })
      );
  }

  logout(): void {
    this.loginStatus.next(false);
  }

  register(userInput: string, passwdInput: string): Observable<boolean> {
    this.users.push({ user: userInput, passwd: passwdInput });
    return of(true).pipe(delay(1000), tap(_ => {
      this.alertService.alert('User registered');
    }));
  }

}
