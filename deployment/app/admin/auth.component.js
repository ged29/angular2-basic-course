import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../model/auth.service";
export var AuthComponent = (function () {
    function AuthComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        if (this.authService.isAuthenticated) {
            this.router.navigateByUrl("/admin/main");
        }
    }
    AuthComponent.prototype.authenticate = function (form) {
        var _this = this;
        if (!form.valid) {
            this.errorMessage = "Form Data Invalid";
            return;
        }
        // perform authentication
        this.authService
            .authenticate(this.username, this.password)
            .subscribe(function (isAuthenticated) {
            if (isAuthenticated) {
                _this.router.navigateByUrl("/admin/main");
            }
            _this.errorMessage = "Authentication failed";
        });
    };
    AuthComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    templateUrl: "auth.component.html"
                },] },
    ];
    /** @nocollapse */
    AuthComponent.ctorParameters = [
        { type: Router, },
        { type: AuthService, },
    ];
    return AuthComponent;
}());
