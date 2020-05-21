import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<any>();

  constructor() { }

  alert(text: string): void {
    this.subject.next(text);
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

}
