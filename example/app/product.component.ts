import { ApplicationRef, Component } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { Product } from "./product.model";

@Component({
    moduleId: module.id,
    selector: "app",
    templateUrl: "template.html",
    styleUrls: ["productComponent.css"],
    styles: ["/deep/ div { border: 2px black solid; font-style:italic }"]
})
export class ProductComponent {
    repository: ProductRepository;

    constructor(appRef: ApplicationRef) {
        this.repository = new ProductRepository();

        (window as any).appRef = appRef;
        (window as any).repository = this.repository;
    }

    addProduct(newProduct: Product) {
        this.repository.saveProduct(newProduct);
    }
}