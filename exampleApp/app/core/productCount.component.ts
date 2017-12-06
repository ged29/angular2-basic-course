import { Component, KeyValueDiffer, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { Model } from "../model/repository.model";

@Component({
    selector: "paProductCount",
    template: `<div class="bg-info p-a-1">There are {{count}} products</div>`
})
export class ProductCountComponent {
    count: number = 0;
    differ: KeyValueDiffer;

    constructor(
        private model: Model,
        private keyValueDiffers: KeyValueDiffers,
        private changeDetectorRef: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.differ = this.keyValueDiffers.find(this.model.getProducts()).create(this.changeDetectorRef);
    }

    ngDoCheck() {
        if (this.differ.diff(this.model.getProducts()) !== null) {
            this.updateCount();
        }
    }

    private updateCount() {
        this.count = this.model.getProducts().length;
    }
}