import { Component, KeyValueDiffer, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { Model } from "../model/repository.model";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "paProductCount",
    template: `<div class="bg-info p-a-1">There are {{count}} products</div>`
})
export class ProductCountComponent {
    category: string;
    count: number = 0;
    differ: KeyValueDiffer;

    constructor(
        private model: Model,
        private keyValueDiffers: KeyValueDiffers,
        private changeDetectorRef: ChangeDetectorRef,
        activatedRoute: ActivatedRoute) {
        activatedRoute.pathFromRoot.forEach(route =>
            route.params.subscribe(params => {
                if (params.hasOwnProperty("category")) {
                    this.category = params["category"];
                }
            }));
    }

    ngOnInit() {
        this.differ = this.keyValueDiffers.find(this.model.getProducts()).create(this.changeDetectorRef);
    }

    ngDoCheck() {
        if (this.differ.diff(this.model.getProducts()) !== null) {
            this.updateCount();
        }
    }

    private updateCount(category?: string) {
        this.count = this.model
            .getProducts()
            .filter(p => this.category === undefined || p.category === this.category).length;
    }
}