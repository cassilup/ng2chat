import { Component } from '@angular/core';
import { Injector } from '@angular/core';
import { ChatService } from "../../shared/chat.service";
import { Message } from "../../types";

import './messageList.component.css';

@Component({
  selector: 'message-list',
  template: `
    <div class="message-list-wrapper">
      <ul class="message-list">
        <li *ngFor="let message of messages; let i = index">
          {{i + 1}}: {{message.text}}
        </li>
      </ul>
    </div>
  `
})
export class MessageListComponent {
  private _subscription;
  private messages:Message[];

  constructor(public chatService:ChatService) {
    this.messages = this.chatService.getMessages();
  }
}
