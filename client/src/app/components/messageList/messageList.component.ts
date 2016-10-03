import { Component } from '@angular/core';
import { Injector } from '@angular/core';
import { ChatService } from "../../shared/chat.service.ts";

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
  `,
  providers: [ ChatService ]
})
export class MessageListComponent {
  constructor(public chatService:ChatService) { }

  messages = this.chatService.getMessages();
}
