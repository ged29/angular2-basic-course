import { Injectable } from "@angular/core";
import { RestDataSource } from "./rest.datasource";
import "rxjs/add/operator/map";
export var AuthService = (function () {
    function AuthService(dataSource) {
        this.dataSource = dataSource;
    }
    AuthService.prototype.authenticate = function (userName, password) {
        return this.dataSource.authenticate(userName, password);
    };
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        get: function () {
            return this.dataSource.auth_token !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.clear = function () {
        this.dataSource.auth_token = undefined;
    };
    AuthService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthService.ctorParameters = [
        { type: RestDataSource, },
    ];
    return AuthService;
}());
