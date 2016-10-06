"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var chat_service_1 = require("../../shared/chat.service");
require('./messageList.component.css');
var MessageListComponent = (function () {
    function MessageListComponent(chatService) {
        this.chatService = chatService;
        this.messages = this.chatService.getMessages();
    }
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'message-list',
            template: "\n    <div class=\"message-list-wrapper\">\n      <ul class=\"message-list\">\n        <li *ngFor=\"let message of messages; let i = index\">\n          {{i + 1}}: {{message.text}}\n        </li>\n      </ul>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [chat_service_1.ChatService])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;
//# sourceMappingURL=messageList.component.js.map