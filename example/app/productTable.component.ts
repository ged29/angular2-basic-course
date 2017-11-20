import { Component, Input } from "@angular/core";
import { ProductRepository } from "./product.repository";

@Component({
    moduleId: module.id,
    selector: "paProductTable",
    templateUrl: "productTable.component.html"
})
export class ProductTableComponent {

    @Input()
    repository: ProductRepository;

    getProduct(id: string) {
        return this.repository.getProduct(Number(id));
    }

    getProducts() {
        return this.repository.getProducts();
    }

    deleteProduct(id: string) {
        this.repository.deleteProduct(Number(id));
    }

    showTable: boolean = true;
}