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
var product_model_1 = require("./product.model");
var form_model_1 = require("./form.model");
var ProductComponent = (function () {
    function ProductComponent(appRef) {
        this.showTable = true;
        this.newProduct = new product_model_1.Product();
        this.repository = new product_repository_1.ProductRepository();
        this.form = new form_model_1.ProductFormGroup();
        window.appRef = appRef;
        window.repository = this.repository;
    }
    Object.defineProperty(ProductComponent.prototype, "jsonProduct", {
        get: function () {
            return JSON.stringify(this.newProduct);
        },
        enumerable: true,
        configurable: true
    });
    ProductComponent.prototype.getProduct = function (id) {
        return this.repository.getProduct(Number(id));
    };
    ProductComponent.prototype.getProducts = function () {
        return this.repository.getProducts();
    };
    ProductComponent.prototype.deleteProduct = function (id) {
        this.repository.deleteProduct(Number(id));
    };
    ProductComponent.prototype.submitForm = function (form) {
        this.formSubmitted = true;
        if (form.valid) {
            this.repository.saveProduct(this.newProduct);
            this.newProduct = new product_model_1.Product();
            this.formSubmitted = false;
            form.reset();
        }
    };
    ProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app",
            templateUrl: "productComponent.html",
            styleUrls: ["productComponent.css"]
        }), 
        __metadata('design:paramtypes', [core_1.ApplicationRef])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map