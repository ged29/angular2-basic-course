import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ProductRepository } from "../model/product.repository";
import { Router, ActivatedRoute } from "@angular/router";
import { Product } from "../model/product.model";

@Component({
    moduleId: module.id,
    templateUrl: "productEditor.component.html"
})
export class ProductEditorComponent {
    product: Product;
    isEdit: boolean;

    constructor(
        private repository: ProductRepository,
        private router: Router,
        private activatedRoute: ActivatedRoute) {
        this.product = new Product();
        this.isEdit = activatedRoute.snapshot.params.mode === "edit";
        if (this.isEdit) {
            let id = Number(activatedRoute.snapshot.params.id);
            this.product = Object.assign(this.product, repository.getProduct(id));
        }
    }

    save(form: NgForm) {
        if (form.valid) {
            this.repository.saveProduct(this.product);
            this.router.navigateByUrl("/admin/main/products");
        }
    }
}