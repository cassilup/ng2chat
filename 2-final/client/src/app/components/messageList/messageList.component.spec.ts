import { TestBed } from '@angular/core/testing';
import { Provider } from '@angular/core';
import { MessageListComponent } from './messageList.component';
import { ChatService } from '../../shared/chat.service';

class MockTestService {
  private getMessages = function() {};
}

describe('Component: MessageListComponent', () => {
  let component:MessageListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageListComponent],
      providers: [ { provide: ChatService, useClass: MockTestService } ]
    });

    const fixture = TestBed.createComponent(MessageListComponent);
    component = fixture.componentInstance;
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });
});
