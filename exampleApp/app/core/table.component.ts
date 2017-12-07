import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
//import { MODES, SHARED_STATE, SharedState } from "./sharedState.model";
//import { Observer } from "rxjs/Observer";

@Component({
    selector: "paTable",
    templateUrl: "table.component.html",
    moduleId: module.id
})
export class TableComponent {
    category: string;

    constructor(
        private model: Model,
        private activatedRoute: ActivatedRoute) {
        activatedRoute.params.subscribe(params => {
            this.category = params["category"] || null;
        });
    }

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model
            .getProducts()
            .filter(p => this.category === null || p.category === this.category);
    }

    getCategories(): string[] {
        return this.getProducts()
            .map(p => p.category)
            .filter((cat: string, index: number, arr: string[]) => arr.indexOf(cat) === index);
    }

    deleteProduct(key: number) {
        this.model.deleteProduct(key);
    }
}
