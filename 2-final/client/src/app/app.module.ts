import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app.component';

import { MessageListComponent } from './components/messageList/messageList.component';
import { NewMessageComponent } from "./components/newMessage/newMessage.component";

import "../styles.css";

@NgModule({
  imports:      [ BrowserModule ], // because it's a web application and it runs in the browser
  declarations: [ App, MessageListComponent, NewMessageComponent ],
  bootstrap:    [ App ]
})
export class AppModule { }
