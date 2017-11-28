import {
    Directive, HostBinding, Input,
    SimpleChange, KeyValueDiffer,
    KeyValueDiffers, ChangeDetectorRef
} from "@angular/core";
import { DiscountService } from "./discount.service";

@Directive({
    selector: "td[pa-price]",
    exportAs: "discount"
})
export class PaDiscountAmountDirective {
    differ: KeyValueDiffer;

    constructor(
        private keyValueDiffers: KeyValueDiffers,
        private changeDetector: ChangeDetectorRef,
        private discountService: DiscountService) {
    }

    @Input("pa-price")
    originalPrice: number;

    discountedPrice: number;

    ngOnInit() {
        this.differ = this.keyValueDiffers.find(this.discountService).create(this.changeDetector);
    }

    ngOnChanges(changes: { [propId: string]: SimpleChange }) {
        if (changes["originalPrice"] !== null) {
            this.updateView();
        }
    }

    ngDoCheck() {
        if (this.differ.diff(this.discountService) !== null) {
            this.updateView();
        }
    }

    private updateView() {
        this.discountedPrice = this.discountService.applyDiscount(this.originalPrice);
    }
}