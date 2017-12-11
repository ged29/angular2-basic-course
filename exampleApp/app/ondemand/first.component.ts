import { Component } from "@angular/core";
import { Model } from "../model/repository.model";
import { Product } from "../model/product.model";

@Component({
    selector: "first",
    template: `<div class="bg-primary p-a-1">
                    There are<span class="strong"> {{getProducts().length}} </span>products
               </div>`
})
export class FirstComponent {

    constructor(private model: Model) {
    }

    category: string = "Soccer";

    getProducts(): Product[] {
        return this.model.getProducts().filter(p => p.category === this.category);
    }
}