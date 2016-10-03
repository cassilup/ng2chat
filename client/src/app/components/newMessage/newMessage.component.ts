import { Component } from "@angular/core";
import { Injector } from "@angular/core";
import { ChatService } from '../../shared/chat.service.ts';

import "./newMessage.component.css";

@Component({
  selector: 'new-message',
  template: `
    <div class="new-message-wrapper">
      <input type="text" class="new-message" #newMessageInput />
      <button type="text" class="btn-send" (click)="sendMessage(newMessageInput.value)">Send</button>
    </div>
  `,
  providers: [ChatService]
})
export class NewMessageComponent {
  chatService = this.injector.get(ChatService);

  constructor(private injector: Injector) { }

  sendMessage = (text:string) => {
    this.chatService.sendMessage(text);
  };
}
