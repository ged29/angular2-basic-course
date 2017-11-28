import { FormControl, ValidatorFn, FormGroup, Validators } from "@angular/forms";
import { LimitValidator } from "./limit.formvalidator";

export class ProductFormControl extends FormControl {
    label: string;
    modelProperty: string;

    constructor(
        label: string,
        property: string,
        value: any,
        validator: ValidatorFn | ValidatorFn[]) {
        super(value, validator);
        this.label = label;
        this.modelProperty = property;
    }

    getValidationMessages() {
        let messages: string[] = [];

        if (!this.errors) {
            return [];
        }

        for (let errorName in this.errors) {
            if (this.errors.hasOwnProperty(errorName)) {
                switch (errorName) {
                    case "required":
                        messages.push(`You must enter a ${this.label}`);
                        break;
                    case "minlength":
                        messages.push(`A ${this.label} must be at least ${this.errors[errorName].requiredLength}
                        characters`);
                        break;
                    case "pattern":
                        messages.push(`The ${this.label} contains illegal characters`);
                        break;
                    case "limit":
                        messages.push(`A ${this.label} cannot be more than ${this.errors[errorName].requiredLimit}`);
                        break;
                }
            }
        }

        return messages;
    }
}

export class ProductFormGroup extends FormGroup {
    constructor() {
        super({
            "name": new ProductFormControl("Name", "name", "", Validators.required),
            "category": new ProductFormControl("Category", "category", "",
                Validators.compose([
                    Validators.required,
                    Validators.pattern("^[A-Za-z ]+$"),
                    Validators.minLength(3),
                    Validators.maxLength(10)])),
            "price": new ProductFormControl("Price", "price", "",
                Validators.compose([
                    Validators.required,
                    Validators.pattern("^[0-9\.]+$"),
                    LimitValidator.limit(100)]))
        });
    }

    get productControls(): ProductFormControl[] {
        return Object.keys(this.controls).map(ctrlName => this.controls[ctrlName] as ProductFormControl);
    }

    getFormValidationMessages() {
        var messages: string[] = [];
        this.productControls.forEach(ctrl => messages.push(...ctrl.getValidationMessages()));
        return messages;
    }
}