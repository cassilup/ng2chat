import { Component } from "@angular/core";
import { Injector } from "@angular/core";
import { ChatService } from '../../shared/chat.service';

import "./newMessage.component.css";

@Component({
  selector: 'new-message',
  template: `
    <div class="new-message-wrapper">
      <input type="text" class="new-message" #newMessageInput />
      <button type="text" class="btn-send" (click)="sendMessage(newMessageInput.value); clearField(newMessageInput);">Send</button>
    </div>
  `
})
export class NewMessageComponent {
  constructor(private chatService:ChatService) { }

  sendMessage = (text:string) => {
    this.chatService.sendMessage(text);
  };

  clearField = (element:any) => {
    element.value = "";
  }
}
