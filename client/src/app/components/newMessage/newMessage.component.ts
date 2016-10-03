import { Component, ElementRef } from "@angular/core";
import { ChatService } from '../../shared/chat.service';

import "./newMessage.component.css";

@Component({
  selector: 'new-message',
  template: `
    <div class="new-message-wrapper">
      <input type="text" class="new-message" #newMessageInput (keyup.enter)="sendMessage(newMessageInput)" />
      <button type="text" class="btn-send" (click)="sendMessage(newMessageInput);">Send</button>
    </div>
  `
})
export class NewMessageComponent {
  constructor(private chatService:ChatService) { }

  sendMessage = (text:any) => {
    this.chatService.sendMessage(text.value);
    text.value = "";
  };
}
