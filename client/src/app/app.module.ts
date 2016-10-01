import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageListComponent } from './components/messageList/messageList.component';

@NgModule({
  imports:      [ BrowserModule ], // because it's a web application and it runs in the browser
  declarations: [ MessageListComponent ],
  bootstrap:    [ MessageListComponent ]
})
export class AppModule { }
