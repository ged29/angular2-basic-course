"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var forms_1 = require("@angular/forms");
var limit_formvalidator_1 = require("./limit.formvalidator");
var ProductFormControl = (function (_super) {
    __extends(ProductFormControl, _super);
    function ProductFormControl(label, property, value, validator) {
        _super.call(this, value, validator);
        this.label = label;
        this.modelProperty = property;
    }
    ProductFormControl.prototype.getValidationMessages = function () {
        var messages = [];
        if (!this.errors) {
            return [];
        }
        for (var errorName in this.errors) {
            if (this.errors.hasOwnProperty(errorName)) {
                switch (errorName) {
                    case "required":
                        messages.push("You must enter a " + this.label);
                        break;
                    case "minlength":
                        messages.push("A " + this.label + " must be at least " + this.errors.minlength.requiredLength + "\n                        characters");
                        break;
                    case "pattern":
                        messages.push("The " + this.label + " contains illegal characters");
                        break;
                    case "limit":
                        messages.push("A " + this.label + " cannot be more than " + this.errors.limit.requiredLimit);
                        break;
                }
            }
        }
        return messages;
    };
    return ProductFormControl;
}(forms_1.FormControl));
exports.ProductFormControl = ProductFormControl;
var ProductFormGroup = (function (_super) {
    __extends(ProductFormGroup, _super);
    function ProductFormGroup() {
        _super.call(this, {
            "name": new ProductFormControl("Name", "name", "", forms_1.Validators.required),
            "category": new ProductFormControl("Category", "category", "", forms_1.Validators.compose([
                forms_1.Validators.required,
                forms_1.Validators.pattern("^[A-Za-z ]+$"),
                forms_1.Validators.minLength(3),
                forms_1.Validators.maxLength(10)])),
            "price": new ProductFormControl("Price", "price", "", forms_1.Validators.compose([
                forms_1.Validators.required,
                forms_1.Validators.pattern("^[0-9\.]+$"),
                limit_formvalidator_1.LimitValidator.limit(100)]))
        });
    }
    Object.defineProperty(ProductFormGroup.prototype, "productControls", {
        get: function () {
            var _this = this;
            return Object.keys(this.controls).map(function (ctrlName) { return _this.controls[ctrlName]; });
        },
        enumerable: true,
        configurable: true
    });
    ProductFormGroup.prototype.getFormValidationMessages = function () {
        var messages = [];
        this.productControls.forEach(function (ctrl) { return messages.push.apply(messages, ctrl.getValidationMessages()); });
        return messages;
    };
    return ProductFormGroup;
}(forms_1.FormGroup));
exports.ProductFormGroup = ProductFormGroup;
//# sourceMappingURL=form.model.js.map