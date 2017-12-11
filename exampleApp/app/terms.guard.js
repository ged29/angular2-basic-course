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
var TermsGuard = (function () {
    function TermsGuard(messageService, router) {
        this.messageService = messageService;
        this.router = router;
    }
    TermsGuard.prototype.canActivate = function (activatedRouteSnapshot, routerStateSnapshot) {
        var _this = this;
        var params = activatedRouteSnapshot.params;
        if (!params.hasOwnProperty("mode") || params["mode"] !== "create") {
            return true;
        }
        return new Promise(function (resolve, reject) {
            var responses = [
                ["Yes", function () { return resolve(true); }],
                ["No", function () {
                        _this.router.navigateByUrl(_this.router.url);
                        resolve(false);
                    }],
            ];
            _this.messageService.reportMessage(new message_model_1.Message("Do you accept the terms & conditions?", false, responses));
        });
    };
    TermsGuard.prototype.canActivateChild = function (activatedRouteSnapshot, routerStateSnapshot) {
        var _this = this;
        if (!activatedRouteSnapshot.params.hasOwnProperty("category")) {
            return true;
        }
        return new Promise(function (resolve, reject) {
            var responses = [
                ["Yes", function () { return resolve(true); }],
                ["No", function () {
                        _this.router.navigateByUrl(routerStateSnapshot.url.replace("categories", "products"));
                        resolve(false);
                    }],
            ];
            _this.messageService.reportMessage(new message_model_1.Message("Do you want to see the categories component?", false, responses));
        });
    };
    TermsGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [message_service_1.MessageService, router_1.Router])
    ], TermsGuard);
    return TermsGuard;
}());
exports.TermsGuard = TermsGuard;
//# sourceMappingURL=terms.guard.js.map