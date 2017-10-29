import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { StoreComponent } from "./store/store.component";
export var StoreFirstGuard = (function () {
    function StoreFirstGuard(router) {
        this.router = router;
        this.isFirstNavigation = true;
    }
    StoreFirstGuard.prototype.canActivate = function (route, state) {
        if (this.isFirstNavigation) {
            this.isFirstNavigation = false;
            if (route.component !== StoreComponent) {
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    };
    StoreFirstGuard.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    StoreFirstGuard.ctorParameters = [
        { type: Router, },
    ];
    return StoreFirstGuard;
}());
