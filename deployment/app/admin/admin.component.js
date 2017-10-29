import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../model/auth.service";
export var AdminComponent = (function () {
    function AdminComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminComponent.prototype.logout = function () {
        this.authService.clear();
        this.router.navigateByUrl("/");
    };
    AdminComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    templateUrl: "admin.component.html"
                },] },
    ];
    /** @nocollapse */
    AdminComponent.ctorParameters = [
        { type: AuthService, },
        { type: Router, },
    ];
    return AdminComponent;
}());
