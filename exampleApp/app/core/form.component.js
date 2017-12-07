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
var router_1 = require("@angular/router");
var product_model_1 = require("../model/product.model");
var repository_model_1 = require("../model/repository.model");
// import { MODES, SHARED_STATE, SharedState } from "./sharedState.model";
// import { Observable } from "rxjs/Observable";
// import "rxjs/add/operator/filter";
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/distinctUntilChanged";
// import "rxjs/add/operator/skipWhile";
var FormComponent = (function () {
    function FormComponent(model, router, activatedRoute) {
        var _this = this;
        this.model = model;
        this.router = router;
        this.editing = false;
        this.product = new product_model_1.Product();
        activatedRoute.params.subscribe(function (params) {
            var id = params["id"];
            if (id) {
                Object.assign(_this.product, model.getProduct(Number(id)) || new product_model_1.Product());
            }
            _this.editing = params["mode"] === "edit";
        });
    }
    FormComponent.prototype.submitForm = function (form) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            this.router.navigateByUrl("/");
        }
    };
    FormComponent.prototype.resetForm = function () {
        this.product = new product_model_1.Product();
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: "paForm",
            templateUrl: "form.component.html",
            styleUrls: ["form.component.css"],
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [repository_model_1.Model, router_1.Router, router_1.ActivatedRoute])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map