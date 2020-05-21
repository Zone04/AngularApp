import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Message[];

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(): void {
    this.messagesService.getMessages().subscribe(messages => this.messages = messages);
  }

}
