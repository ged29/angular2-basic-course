import { Component } from "@angular/core";
import { ProductRepository } from "./product.repository";

@Component({
    selector: "app",
    templateUrl: "app/template.html"
})
export class ProductComponent {
    repository: ProductRepository;

    constructor() {
        this.repository = new ProductRepository();
    }

    getProducts() {
        return this.repository.getProducts();
    }

    getClasses(): string {
        return this.getProducts().length == 5 ? "bg-success" : "bg-warning";
    }
}
