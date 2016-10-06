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
var core_1 = require("@angular/core");
var chat_service_1 = require('../../shared/chat.service');
require("./newMessage.component.css");
var NewMessageComponent = (function () {
    function NewMessageComponent(chatService) {
        var _this = this;
        this.chatService = chatService;
        this.sendMessage = function (text) {
            _this.chatService.sendMessage(text.value);
            text.value = "";
        };
    }
    NewMessageComponent = __decorate([
        core_1.Component({
            selector: 'new-message',
            template: "\n    <div class=\"new-message-wrapper\">\n      <input type=\"text\" class=\"new-message\" #newMessageInput (keyup.enter)=\"sendMessage(newMessageInput)\" />\n      <button type=\"text\" class=\"btn-send\" (click)=\"sendMessage(newMessageInput);\">Send</button>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [chat_service_1.ChatService])
    ], NewMessageComponent);
    return NewMessageComponent;
}());
exports.NewMessageComponent = NewMessageComponent;
//# sourceMappingURL=newMessage.component.js.map