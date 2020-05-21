import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AlertService } from '../alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateY(0)' })),
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate(400)
      ]),
      transition(':leave', [
        animate(400, style({ transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class AlertComponent implements OnInit {
  public textAlert: string;
  private subscription: Subscription;

  private timeout;

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
  this.subscription = this.alertService.getAlert().subscribe(textAlert => {
      clearTimeout(this.timeout);
      this.textAlert = textAlert;
      this.timeout = setTimeout(() => {
        this.textAlert = null;
      }, 5000);
    });
  }

  removeAlert(): void {
    this.textAlert = null;
    clearTimeout(this.timeout);
  }

}
