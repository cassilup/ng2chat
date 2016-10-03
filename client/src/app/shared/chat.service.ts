import { Injectable } from '@angular/core';
import { Message } from '../types';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
  private url = 'http://localhost:3000';
  private socket;
  private messages:Message[] = [];
  private connection;

  constructor() {
    this.socket = io(this.url);

    this.connection = this.onMessageReceived().subscribe((message:string) => {
      this.messages.push({ text: message });
    });
  }

  public getMessages():Array<Message> {
    return this.messages;
  }

  sendMessage(message){
    this.socket.emit('chat message', message);
  }

  onMessageReceived() {
    let observable = new Observable(observer => {
      this.socket.on('chat message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
}
