import { Component } from '@angular/core';

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
  `,
  styles: [`
    .message-list-wrapper {
      width: 100%;
      height: 100%;
    }

    .message-list-wrapper .message-list {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    .message-list-wrapper .message-list li {
      padding: 10px;
    }

    .message-list-wrapper .message-list li:nth-child(odd) {
      background-color: #eee;
    }
  `]
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
