import { Component } from "@angular/core";
import { MessageListComponent } from "./components/messageList/messageList.component";
import { NewMessageComponent } from "./components/newMessage/newMessage.component";
import { ChatService } from './shared/chat.service';
import { Message } from "./types";

@Component({
  selector: 'app',
  template: `
    <div class="app-wrapper">
      <message-list [messages]="messages"></message-list>
      <new-message></new-message>
    </div>
  `,
  providers: [ ChatService ]
})
export class App {
  constructor(public chatService:ChatService) { }

  messages:Message[] = this.chatService.getMessages();
}
