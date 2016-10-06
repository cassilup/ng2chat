import { TestBed } from '@angular/core/testing';
import { MessageListComponent } from './messageList.component';

describe('Component: MessageListComponent', () => {
  let component:MessageListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageListComponent]
    });

    const fixture = TestBed.createComponent(MessageListComponent);
    component = fixture.componentInstance;
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });
});
