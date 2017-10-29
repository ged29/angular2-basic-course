import { Injectable } from "@angular/core";
export var Cart = (function () {
    function Cart() {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }
    Cart.prototype.addLine = function (product, quantity) {
        if (quantity === void 0) { quantity = 1; }
        var line = this.lines.find(function (line) { return line.product.id === product.id; });
        if (line !== undefined) {
            line.quantity += quantity;
        }
        else {
            this.lines.push(new CartLine(product, quantity));
        }
        this.recalculate();
    };
    Cart.prototype.updateQuantity = function (product, quantity) {
        var line = this.lines.find(function (line) { return line.product.id === product.id; });
        if (line !== undefined) {
            line.quantity = Number(quantity);
            this.recalculate();
        }
    };
    Cart.prototype.removeLine = function (id) {
        var lineIndex = this.lines.findIndex(function (line) { return line.product.id === id; });
        if (lineIndex >= 0) {
            this.lines.splice(lineIndex, 1);
            this.recalculate();
        }
    };
    Cart.prototype.clear = function () {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines = [];
    };
    Cart.prototype.recalculate = function () {
        var _this = this;
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(function (line) {
            _this.itemCount += 1;
            _this.cartPrice += line.lineTotal;
        });
    };
    Cart.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    Cart.ctorParameters = [];
    return Cart;
}());
export var CartLine = (function () {
    function CartLine(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    Object.defineProperty(CartLine.prototype, "lineTotal", {
        get: function () {
            return this.quantity * this.product.price;
        },
        enumerable: true,
        configurable: true
    });
    return CartLine;
}());
