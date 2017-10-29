import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";
export var Order = (function () {
    function Order(cart) {
        this.cart = cart;
        this.shipped = false;
    }
    Order.prototype.clear = function () {
        this.id = this.name = this.address = this.city = this.state = this.zip = this.country = null;
        this.shipped = false;
        this.cart.clear();
    };
    Order.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Order.ctorParameters = [
        { type: Cart, },
    ];
    return Order;
}());
