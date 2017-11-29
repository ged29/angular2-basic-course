import { Component, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
import { MODES, SHARED_STATE, SharedState } from "./sharedState.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/skipWhile";

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
        @Inject(SHARED_STATE) private stateEvents: Observable<SharedState>) {

        stateEvents
            // .map(state => state.mode === MODES.EDIT ? state.id : -1)
            // .distinctUntilChanged((a, b) => a === b)
            // .filter(id => id !== 3)
            .subscribe(update => {
                this.product = new Product();
                this.editing = update.mode === MODES.EDIT;

                if (this.editing) {
                    Object.assign(this.product, this.model.getProduct(update.id));
                }
            });
    }

    submitForm(form: NgForm) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            this.product = new Product();
            form.reset();
        }
    }

    resetForm() {
        this.product = new Product();
    }
}
