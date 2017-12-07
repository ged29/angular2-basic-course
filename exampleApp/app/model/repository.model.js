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
var rest_datasource_1 = require("./rest.datasource");
var Model = (function () {
    function Model(dataSource) {
        var _this = this;
        this.dataSource = dataSource;
        this.locator = function (p, id) { return p.id === id; };
        this.products = new Array();
        this.dataSource.getProducts().subscribe(function (data) {
            _this.products = data;
        });
    }
    Model.prototype.getProducts = function () {
        return this.products;
    };
    Model.prototype.getProduct = function (id) {
        var _this = this;
        return this.products.find(function (p) { return _this.locator(p, id); });
    };
    Model.prototype.getNextProductId = function (id) {
        var _this = this;
        var inx = this.products.findIndex(function (p) { return _this.locator(p, id); });
        if (inx === -1) {
            return 0;
        }
        inx = inx + 2 > this.products.length ? 0 : inx + 1;
        return this.products[inx].id;
    };
    Model.prototype.getPreviousProductId = function (id) {
        var _this = this;
        var inx = this.products.findIndex(function (p) { return _this.locator(p, id); });
        if (inx === -1) {
            return 0;
        }
        inx = inx - 1 < 0 ? this.products.length - 1 : inx - 1;
        return this.products[inx].id;
    };
    Model.prototype.saveProduct = function (product) {
        var _this = this;
        if (product.id === undefined) {
            this.dataSource
                .saveProduct(product)
                .subscribe(function (p) { return _this.products.push(p); });
        }
        else {
            this.dataSource
                .updateProduct(product)
                .subscribe(function (updatedProduct) {
                var findId = updatedProduct.id, index = _this.products.findIndex(function (p) { return _this.locator(p, findId); });
                _this.products.splice(index, 1, updatedProduct);
            });
        }
    };
    Model.prototype.deleteProduct = function (id) {
        var _this = this;
        this.dataSource
            .deleteProduct(id)
            .subscribe(function (x) {
            var index = _this.products.findIndex(function (p) { return _this.locator(p, id); });
            _this.products.splice(index, 1);
        });
    };
    Model = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [rest_datasource_1.RestDataSource])
    ], Model);
    return Model;
}());
exports.Model = Model;
//# sourceMappingURL=repository.model.js.map