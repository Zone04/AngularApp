import { Injectable } from '@angular/core';
import { Message } from './message';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: Message[];

  constructor(
    private alertService: AlertService
  ) {
    this.messages = [];
  }

  getMessages(): Observable<Message[]> {
    return of(this.messages).pipe(delay(2000));
  }

  addMessages(message: Message): void {
    this.messages.push(message);
    this.alertService.alert('Message submitted');
  }

}
