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
var product_model_1 = require("../model/product.model");
var PaEnhanceDirective = (function () {
    function PaEnhanceDirective() {
        this.click = new core_1.EventEmitter();
    }
    PaEnhanceDirective.prototype.triggerCustomEvent = function () {
        if (this.product) {
            this.click.emit(this.product.category);
        }
    };
    __decorate([
        core_1.Input("pa-enh-class"),
        core_1.HostBinding("class"), 
        __metadata('design:type', String)
    ], PaEnhanceDirective.prototype, "bgColor", void 0);
    __decorate([
        core_1.Input("pa-enh-product"), 
        __metadata('design:type', product_model_1.Product)
    ], PaEnhanceDirective.prototype, "product", void 0);
    __decorate([
        core_1.Output("pa-enh-productCategory"), 
        __metadata('design:type', Object)
    ], PaEnhanceDirective.prototype, "click", void 0);
    __decorate([
        core_1.HostListener("click"), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], PaEnhanceDirective.prototype, "triggerCustomEvent", null);
    PaEnhanceDirective = __decorate([
        core_1.Directive({
            selector: ".pa-enhance-attr"
        }), 
        __metadata('design:paramtypes', [])
    ], PaEnhanceDirective);
    return PaEnhanceDirective;
}());
exports.PaEnhanceDirective = PaEnhanceDirective;
//# sourceMappingURL=attrEnhance.directive.js.map