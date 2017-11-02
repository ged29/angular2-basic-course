import { FormControl, ValidatorFn } from "@angular/forms";

export class LimitValidator {
    static limit(limit: number): ValidatorFn {
        return (ctrl: FormControl): { [key: string]: any } => {
            let value = Number(ctrl.value);
            return !isNaN(value) && value > limit
                ? { "limit": { "requiredLimit": limit, actualValue: value } }
                : null;
        };
    }
}