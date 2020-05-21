import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from '../messages.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm;

  constructor(
    private messagesService: MessagesService,
    private alertService: AlertService
  ) {
    this.contactForm = new FormGroup({
      author: new FormControl(null, [Validators.required]),
      messageContent: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const message = {author: this.contactForm.get('author').value, content: this.contactForm.get('messageContent').value};
      this.messagesService.addMessages(message);
      this.contactForm.reset();
    } else {
      this.alertService.alert('Incomplete form.');
    }
  }

}
