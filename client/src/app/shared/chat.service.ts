import { Injectable } from '@angular/core';
import { Message } from '../types';

@Injectable()
export class ChatService {
  messages:Message[];

  constructor() {
    this.messages = [{
      text: "first message"
    }, {
      text: "2nd message"
    }, {
      text: "3rd message"
    }, {
      text: "4th message"
    },{
      text: "5th message"
    }];
  }

  public sendMessage(text:string) {
    this.messages.push({ text });
  }

  public getMessages():Array<Message> {
    return this.messages;
  }
}
