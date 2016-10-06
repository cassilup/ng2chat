"use strict";
var testing_1 = require('@angular/core/testing');
var messageList_component_1 = require('./messageList.component');
describe('Component: MessageListComponent', function () {
    var component;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [messageList_component_1.MessageListComponent]
        });
        var fixture = testing_1.TestBed.createComponent(messageList_component_1.MessageListComponent);
        component = fixture.componentInstance;
    });
    it('should have a defined component', function () {
        expect(component).toBeDefined();
    });
});
//# sourceMappingURL=messageList.component.spec.js.map