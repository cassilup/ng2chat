import { Component } from "@angular/core";
import { MessageListComponent } from "./components/messageList/messageList.component";

@Component({
  selector: 'ng2chat-app',
  template: `
    <message-list></message-list>
  `
})
export class Ng2chatApp {}
