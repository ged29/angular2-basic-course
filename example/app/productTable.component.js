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
var product_repository_1 = require("./product.repository");
var ProductTableComponent = (function () {
    function ProductTableComponent(repository) {
        this.repository = repository;
        this.showTable = true;
        this.dateObject = new Date(2020, 1, 20);
        this.dateString = "2020-02-20T00:00:00.000Z";
        this.dateNumber = 1582156800000;
    }
    ProductTableComponent.prototype.getProduct = function (id) {
        return this.repository.getProduct(Number(id));
    };
    ProductTableComponent.prototype.getProducts = function () {
        return this.repository.getProducts();
    };
    ProductTableComponent.prototype.deleteProduct = function (id) {
        this.repository.deleteProduct(Number(id));
    };
    ProductTableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "paProductTable",
            templateUrl: "productTable.component.html"
        }), 
        __metadata('design:paramtypes', [product_repository_1.ProductRepository])
    ], ProductTableComponent);
    return ProductTableComponent;
}());
exports.ProductTableComponent = ProductTableComponent;
//# sourceMappingURL=productTable.component.js.map