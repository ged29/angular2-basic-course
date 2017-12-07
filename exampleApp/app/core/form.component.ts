import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
// import { MODES, SHARED_STATE, SharedState } from "./sharedState.model";
// import { Observable } from "rxjs/Observable";
// import "rxjs/add/operator/filter";
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/distinctUntilChanged";
// import "rxjs/add/operator/skipWhile";

@Component({
    selector: "paForm",
    templateUrl: "form.component.html",
    styleUrls: ["form.component.css"],
    moduleId: module.id
})
export class FormComponent {
    editing: boolean = false;
    product: Product = new Product();

    constructor(
        private model: Model,
        private router: Router,
        activatedRoute: ActivatedRoute) {
        activatedRoute.params.subscribe(params => {
            let id = params["id"];
            if (id) {
                Object.assign(this.product, model.getProduct(Number(id)) || new Product());
            }
            this.editing = params["mode"] === "edit";
        });
    }

    submitForm(form: NgForm) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            this.router.navigateByUrl("/");
        }
    }

    resetForm() {
        this.product = new Product();
    }
}
