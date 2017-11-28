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
var PaStructuredDirective = (function () {
    // ViewContainerRef represents the place in the HTML document occupied by the template element
    // TemplateRef represents the template element’s contents
    function PaStructuredDirective(viewContainer, template) {
        this.viewContainer = viewContainer;
        this.template = template;
    }
    PaStructuredDirective.prototype.ngOnChanges = function (changes) {
        var change = changes["expressionResult"];
        if (!change.isFirstChange() && change.currentValue === false) {
            this.viewContainer.clear();
        }
        else if (change.currentValue === true) {
            this.viewContainer.createEmbeddedView(this.template);
        }
        this.viewContainer.element;
    };
    __decorate([
        core_1.Input("paIf"), 
        __metadata('design:type', Boolean)
    ], PaStructuredDirective.prototype, "expressionResult", void 0);
    PaStructuredDirective = __decorate([
        core_1.Directive({
            selector: "[paIf]"
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.TemplateRef])
    ], PaStructuredDirective);
    return PaStructuredDirective;
}());
exports.PaStructuredDirective = PaStructuredDirective;
//# sourceMappingURL=paif.directive.js.map