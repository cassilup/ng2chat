import { Component } from '@angular/core';

import './messageList.component.css';

@Component({
  selector: 'message-list',
  template: `
    <div class="message-list-wrapper">
      <ul class="message-list">
        <li *ngFor="let message of messages">
          {{message.text}}
        </li>
      </ul>
    </div>
  `
})
export class MessageListComponent {
  private messages = [{
    text: "first message"
  }, {
    text: "2nd message"
  }, {
    text: "3rd message"
  }, {
    text: "4th message"
  }];
}
