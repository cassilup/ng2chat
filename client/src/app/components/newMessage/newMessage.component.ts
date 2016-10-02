import { Component } from "@angular/core";

import "./newMessage.component.css";

@Component({
  selector: 'new-message',
  template: `
    <div class="new-message-wrapper">
      <input type="text" class="new-message" />
      <button type="text" class="btn-send">Send</button>
    </div>
  `
})
export class NewMessageComponent { }
