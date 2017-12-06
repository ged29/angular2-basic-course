import { Component, Inject } from "@angular/core";
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

    constructor(private model: Model) {
    }

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    deleteProduct(key: number) {
        this.model.deleteProduct(key);
    }
}
