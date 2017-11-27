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
var form_model_1 = require("./form.model");
var product_model_1 = require("./product.model");
var product_repository_1 = require("./product.repository");
var ProductFormComponent = (function () {
    function ProductFormComponent(repository) {
        this.repository = repository;
        this.form = new form_model_1.ProductFormGroup();
        this.newProduct = new product_model_1.Product();
        this.isFormSubmitted = false;
    }
    ProductFormComponent.prototype.submitForm = function (form) {
        this.isFormSubmitted = true;
        if (form.valid) {
            this.repository.saveProduct(this.newProduct);
            this.newProduct = new product_model_1.Product();
            this.form.reset();
            this.isFormSubmitted = false;
        }
    };
    ProductFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "paProductForm",
            templateUrl: "productForm.component.html",
        }), 
        __metadata('design:paramtypes', [product_repository_1.ProductRepository])
    ], ProductFormComponent);
    return ProductFormComponent;
}());
exports.ProductFormComponent = ProductFormComponent;
//# sourceMappingURL=productForm.component.js.map