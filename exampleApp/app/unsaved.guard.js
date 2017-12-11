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
var router_1 = require("@angular/router");
var message_service_1 = require("./messages/message.service");
var message_model_1 = require("./messages/message.model");
var Subject_1 = require("rxjs/Subject");
var UnsavedGuard = (function () {
    function UnsavedGuard(messageService, router) {
        this.messageService = messageService;
        this.router = router;
    }
    UnsavedGuard.prototype.canDeactivate = function (component, route, state) {
        if (!component.editing) {
            return true;
        }
        if (["name", "category", "price"].some(function (prop) { return component.product[prop] !== component.originalProduct[prop]; })) {
            var subject_1 = new Subject_1.Subject();
            this.messageService.reportMessage(new message_model_1.Message("Discard Changes?", true, [
                ["Yes", function () { subject_1.next(true); subject_1.complete(); }],
                ["No", function () { subject_1.next(false); subject_1.complete(); }]
            ]));
            return subject_1;
        }
        return true;
    };
    UnsavedGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [message_service_1.MessageService, router_1.Router])
    ], UnsavedGuard);
    return UnsavedGuard;
}());
exports.UnsavedGuard = UnsavedGuard;
//# sourceMappingURL=unsaved.guard.js.map