import { Component, Output, EventEmitter } from "@angular/core";
import { ProductFormGroup } from "./form.model";
import { Product } from "./product.model";
import { NgForm } from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: "paProductForm",
    templateUrl: "productForm.component.html",
    styleUrls: ["productForm.component.css"],
    styles: ["div { background-color: lightgreen }"]
})
export class ProductFormComponent {
    form: ProductFormGroup = new ProductFormGroup();
    newProduct: Product = new Product();
    isFormSubmitted: boolean = false;

    @Output("paNewProduct")
    paNewProductEvent = new EventEmitter<Product>();

    submitForm(form: NgForm) {
        this.isFormSubmitted = true;

        if (form.valid) {
            this.paNewProductEvent.emit(this.newProduct);
            this.newProduct = new Product();
            this.form.reset();
            this.isFormSubmitted = false;
        }
    }
}