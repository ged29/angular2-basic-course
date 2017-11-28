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
var product_model_1 = require("./product.model");
var product_datasource_1 = require("./product.datasource");
var ProductRepository = (function () {
    function ProductRepository(dataSource) {
        var _this = this;
        this.dataSource = dataSource;
        this.locator = function (product, id) { return product.id === id; };
        this.products = new Array();
        this.dataSource.getData().forEach(function (p) { return _this.products.push(p); });
    }
    ProductRepository.prototype.getProducts = function () {
        return this.products;
    };
    ProductRepository.prototype.getProduct = function (id) {
        var _this = this;
        return this.products.find(function (p) { return _this.locator(p, id); });
    };
    ProductRepository.prototype.saveProduct = function (product) {
        var _this = this;
        if (product.id === undefined) {
            product.id = this.generateID();
            this.products.push(product);
        }
        else {
            var index = this.products
                .findIndex(function (p) { return _this.locator(p, product.id); });
            this.products.splice(index, 1, product);
        }
    };
    ProductRepository.prototype.deleteProduct = function (id) {
        var _this = this;
        var index = this.products.findIndex(function (p) { return _this.locator(p, id); });
        if (index > -1) {
            this.products.splice(index, 1);
        }
    };
    ProductRepository.prototype.swapProducts = function () {
        var p = this.products.shift();
        this.products.push(new product_model_1.Product(p.id, p.name, p.category, p.price));
    };
    ProductRepository.prototype.generateID = function () {
        var candidate = 100;
        while (this.getProduct(candidate) !== undefined) {
            candidate++;
        }
        return candidate;
    };
    ProductRepository = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [product_datasource_1.ProductDataSource])
    ], ProductRepository);
    return ProductRepository;
}());
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map