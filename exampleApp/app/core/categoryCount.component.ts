import { Component, KeyValueDiffer, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { Model } from "../model/repository.model";

@Component({
    selector: "paCategoryCount",
    template: `<div class="bg-primary p-a-1">There are {{count}} categories</div>`
})
export class CategoryCountComponent {
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
        this.count = this.model
            .getProducts()
            .map(p => p.category)
            .filter((category: string, index: number, arr: string[]) => arr.indexOf(category) === index).length;
    }
}