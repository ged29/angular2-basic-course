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
var cellBgColor_directive_1 = require("./cellBgColor.directive");
var PaCellBgColorSwitcher = (function () {
    function PaCellBgColorSwitcher() {
    }
    PaCellBgColorSwitcher.prototype.ngOnChanges = function (changes) {
        this.updateContentChildren(changes["isTdBgColorDark"].currentValue);
    };
    PaCellBgColorSwitcher.prototype.ngAfterContentInit = function () {
        var _this = this;
        // there is some change in the set of directives
        this.contentChildren.changes.subscribe(function () {
            setTimeout(function () { return _this.updateContentChildren(_this.isTdBgColorDark); }, 0);
        });
    };
    PaCellBgColorSwitcher.prototype.updateContentChildren = function (isDark) {
        if (isDark !== undefined && this.contentChildren !== undefined) {
            this.contentChildren.forEach(function (child, index) { return child.setColor(index % 2 ? isDark : !isDark); });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], PaCellBgColorSwitcher.prototype, "isTdBgColorDark", void 0);
    __decorate([
        core_1.ContentChildren(cellBgColor_directive_1.PaCellBgColor), 
        __metadata('design:type', core_1.QueryList)
    ], PaCellBgColorSwitcher.prototype, "contentChildren", void 0);
    PaCellBgColorSwitcher = __decorate([
        core_1.Directive({
            selector: "table"
        }), 
        __metadata('design:paramtypes', [])
    ], PaCellBgColorSwitcher);
    return PaCellBgColorSwitcher;
}());
exports.PaCellBgColorSwitcher = PaCellBgColorSwitcher;
//# sourceMappingURL=cellBgColorSwitcher.directive.js.map