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
var repository_model_1 = require("../model/repository.model");
var router_1 = require("@angular/router");
var ProductCountComponent = (function () {
    function ProductCountComponent(model, keyValueDiffers, changeDetectorRef, activatedRoute) {
        var _this = this;
        this.model = model;
        this.keyValueDiffers = keyValueDiffers;
        this.changeDetectorRef = changeDetectorRef;
        this.count = 0;
        activatedRoute.pathFromRoot.forEach(function (route) {
            return route.params.subscribe(function (params) {
                if (params.hasOwnProperty("category")) {
                    _this.category = params["category"];
                }
            });
        });
    }
    ProductCountComponent.prototype.ngOnInit = function () {
        this.differ = this.keyValueDiffers.find(this.model.getProducts()).create(this.changeDetectorRef);
    };
    ProductCountComponent.prototype.ngDoCheck = function () {
        if (this.differ.diff(this.model.getProducts()) !== null) {
            this.updateCount();
        }
    };
    ProductCountComponent.prototype.updateCount = function (category) {
        var _this = this;
        this.count = this.model
            .getProducts()
            .filter(function (p) { return _this.category === undefined || p.category === _this.category; }).length;
    };
    ProductCountComponent = __decorate([
        core_1.Component({
            selector: "paProductCount",
            template: "<div class=\"bg-info p-a-1\">There are {{count}} products</div>"
        }), 
        __metadata('design:paramtypes', [repository_model_1.Model, core_1.KeyValueDiffers, core_1.ChangeDetectorRef, router_1.ActivatedRoute])
    ], ProductCountComponent);
    return ProductCountComponent;
}());
exports.ProductCountComponent = ProductCountComponent;
//# sourceMappingURL=productCount.component.js.map