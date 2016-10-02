import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2chatApp } from './app.component';

import { MessageListComponent } from './components/messageList/messageList.component';

@NgModule({
  imports:      [ BrowserModule ], // because it's a web application and it runs in the browser
  declarations: [ Ng2chatApp, MessageListComponent ],
  bootstrap:    [ Ng2chatApp ]
})
export class AppModule { }
