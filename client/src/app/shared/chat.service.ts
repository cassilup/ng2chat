import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {
  messages = [{
    text: "first message"
  }, {
    text: "2nd message"
  }, {
    text: "3rd message"
  }, {
    text: "4th message"
  },{
    text: "5th message"
  }, {
    text: "6th message"
  }, {
    text: "7th message"
  }, {
    text: "8th message"
  },{
    text: "9th message"
  }, {
    text: "10th message"
  }, {
    text: "11th message"
  }, {
    text: "12th message"
  }];

  public sendMessage(text:string) {
    this.messages.push({ text });
  }
}
