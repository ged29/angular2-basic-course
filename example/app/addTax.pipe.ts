import { Pipe } from "@angular/core";

@Pipe({
    name: "addTax"
})
export class PaAddTaxPipe {
    defaultRate: number = 10;

    transform(value: any, rate?: any): number {
        let valueNumber = Number(value),
            rateNumber = rate === undefined ? this.defaultRate : Number(rate);

        return valueNumber + (valueNumber * (rateNumber / 100));
    }
}