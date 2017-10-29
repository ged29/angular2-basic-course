import { Component } from "@angular/core";
import { ProductRepository } from "../model/product.repository";
import { Router, ActivatedRoute } from "@angular/router";
import { Product } from "../model/product.model";
export var ProductEditorComponent = (function () {
    function ProductEditorComponent(repository, router, activatedRoute) {
        this.repository = repository;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.product = new Product();
        this.isEdit = activatedRoute.snapshot.params["mode"] === "edit";
        if (this.isEdit) {
            var id = Number(activatedRoute.snapshot.params["id"]);
            this.product = Object.assign(this.product, repository.getProduct(id));
        }
    }
    ProductEditorComponent.prototype.save = function (form) {
        if (form.valid) {
            this.repository.saveProduct(this.product);
            this.router.navigateByUrl("/admin/main/products");
        }
    };
    ProductEditorComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    templateUrl: "productEditor.component.html"
                },] },
    ];
    /** @nocollapse */
    ProductEditorComponent.ctorParameters = [
        { type: ProductRepository, },
        { type: Router, },
        { type: ActivatedRoute, },
    ];
    return ProductEditorComponent;
}());
