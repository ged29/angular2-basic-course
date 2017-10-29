import { Component } from "@angular/core";
// root component that takes responsibility for the top-level content presented to the user
export var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: "app",
                    template: "<router-outlet></router-outlet>"
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [];
    return AppComponent;
}());
