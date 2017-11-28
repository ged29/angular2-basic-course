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
var PaIteratorDirective = (function () {
    function PaIteratorDirective(viewContainer, template, differs, changeDetector) {
        this.viewContainer = viewContainer;
        this.template = template;
        this.differs = differs;
        this.changeDetector = changeDetector;
        this.viewsMap = new Map();
        this.shouldReindexCtx = false;
    }
    PaIteratorDirective.prototype.ngOnInit = function () {
        this.differ = this.differs.find(this.dataSource).create(this.changeDetector);
    };
    PaIteratorDirective.prototype.ngDoCheck = function () {
        var _this = this;
        var changes = this.differ.diff(this.dataSource);
        if (changes !== null) {
            changes.forEachAddedItem(function (item) { return _this.addItem(item); });
            changes.forEachRemovedItem(function (item) { return _this.removeItem(item); });
            if (this.shouldReindexCtx) {
                this.reIndexCtx();
            }
        }
    };
    PaIteratorDirective.prototype.addItem = function (addition) {
        var ctx = new PaIteratorContext(addition.item, addition.currentIndex, this.dataSource.length), view = this.viewContainer.createEmbeddedView(this.template, ctx);
        this.viewsMap.set(addition.trackById, view);
    };
    PaIteratorDirective.prototype.removeItem = function (removal) {
        var id = removal.trackById;
        if (!this.viewsMap.has(id))
            return;
        var view = this.viewsMap.get(id), viewIndexToRemove = this.viewContainer.indexOf(view);
        this.viewContainer.remove(viewIndexToRemove);
        this.viewsMap.delete(id);
        this.shouldReindexCtx = true;
    };
    PaIteratorDirective.prototype.reIndexCtx = function () {
        var index = 0, total = this.viewsMap.size;
        this.viewsMap.forEach(function (view) { return view.context.setData(index++, total); });
        this.shouldReindexCtx = false;
    };
    __decorate([
        core_1.Input("paForOf"), 
        __metadata('design:type', Array)
    ], PaIteratorDirective.prototype, "dataSource", void 0);
    PaIteratorDirective = __decorate([
        core_1.Directive({
            selector: "[paForOf]"
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.TemplateRef, core_1.IterableDiffers, core_1.ChangeDetectorRef])
    ], PaIteratorDirective);
    return PaIteratorDirective;
}());
exports.PaIteratorDirective = PaIteratorDirective;
var PaIteratorContext = (function () {
    function PaIteratorContext($implicit, index, total) {
        this.$implicit = $implicit;
        this.setData(index, total);
    }
    PaIteratorContext.prototype.setData = function (index, total) {
        this.index = index;
        this.even = index % 2 === 0;
        this.odd = !this.even;
        this.first = index === 0;
        this.last = index === total - 1;
    };
    return PaIteratorContext;
}());
//# sourceMappingURL=iterator.directive.js.map