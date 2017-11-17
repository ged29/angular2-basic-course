import { NgModel, NgForm } from "@angular/forms";
import { ApplicationRef, Component } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { Product } from "./product.model";
import { ProductFormGroup } from "./form.model";

@Component({
    moduleId: module.id,
    selector: "app",
    templateUrl: "productComponent.html",
    styleUrls: ["productComponent.css"]
})
export class ProductComponent {
    repository: ProductRepository;
    newProduct: Product;
    formSubmitted: boolean;
    form: ProductFormGroup;
    showTable: boolean = true;

    constructor(appRef: ApplicationRef) {
        this.newProduct = new Product();
        this.repository = new ProductRepository();
        this.form = new ProductFormGroup();

        (window as any).appRef = appRef;
        (window as any).repository = this.repository;
    }

    get jsonProduct(): string {
        return JSON.stringify(this.newProduct);
    }

    getProduct(id: string) {
        return this.repository.getProduct(Number(id));
    }

    getProducts() {
        return this.repository.getProducts();
    }

    submitForm(form: NgForm) {
        this.formSubmitted = true;

        if (form.valid) {
            this.repository.saveProduct(this.newProduct);
            this.newProduct = new Product();
            this.formSubmitted = false;
            form.reset();
        }
    }
}