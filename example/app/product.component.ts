import { ApplicationRef, Component } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { Product } from "./product.model";

@Component({
    selector: "app",
    templateUrl: "app/template.html"
})
export class ProductComponent {
    repository: ProductRepository;
    selectedProductName: string;

    constructor(appRef: ApplicationRef) {
        this.repository = new ProductRepository();
        (window as any).appRef = appRef;
        (window as any).repository = this.repository;
    }

    getProduct(id: string) {
        return this.repository.getProduct(Number(id));
    }

    getProducts() {
        return this.repository.getProducts();
    }

    isSelected(productName: string) {
        return this.selectedProductName && productName && this.selectedProductName.toUpperCase() === productName.toUpperCase();
    }
}
