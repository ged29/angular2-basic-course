import { Component } from "@angular/core";
import { ProductFormGroup } from "../model/form.model";
import { Product } from "../model/product.model";
import { NgForm } from "@angular/forms";
import { ProductRepository } from "../model/product.repository";
import { VALUE_SERVICE } from "../common/valueDisplay.directive";

@Component({
    moduleId: module.id,
    selector: "paProductForm",
    templateUrl: "productForm.component.html",
    viewProviders: [{ provide: VALUE_SERVICE, useValue: "Oranges" }]
    // styleUrls: ["productForm.component.css"],
    // styles: ["div { background-color: lightgreen }"]
})
export class ProductFormComponent {
    form: ProductFormGroup = new ProductFormGroup();
    newProduct: Product = new Product();
    isFormSubmitted: boolean = false;

    constructor(private repository: ProductRepository) {
    }

    submitForm(form: NgForm) {
        this.isFormSubmitted = true;

        if (form.valid) {
            this.repository.saveProduct(this.newProduct);
            this.newProduct = new Product();
            this.form.reset();
            this.isFormSubmitted = false;
        }
    }
}