import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ProductRepository } from "../model/product.repository";
import { Cart } from "../model/cart.model";
export var StoreComponent = (function () {
    function StoreComponent(repository, cart, router) {
        this.repository = repository;
        this.cart = cart;
        this.router = router;
        this.productsPerPage = 4;
        this.selectedPage = 1;
    }
    Object.defineProperty(StoreComponent.prototype, "products", {
        get: function () {
            // 1 => 0  [4]
            // 2 => 4  [4]
            // 3 => 8  [4]
            // 4 => 12 [4]
            var pageIndex = (this.selectedPage - 1) * this.productsPerPage;
            return this.repository
                .getProducts(this.selectedCategory)
                .slice(pageIndex, pageIndex + this.productsPerPage);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreComponent.prototype, "categories", {
        get: function () {
            return this.repository.getCategories();
        },
        enumerable: true,
        configurable: true
    });
    StoreComponent.prototype.changeCategory = function (selectedCategory) {
        this.selectedCategory = selectedCategory;
    };
    StoreComponent.prototype.changePage = function (selectedPage) {
        this.selectedPage = selectedPage;
    };
    StoreComponent.prototype.changePageSize = function (newSize) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    };
    StoreComponent.prototype.addProductToCart = function (product) {
        this.cart.addLine(product);
        //this.router.navigateByUrl("/cart");
    };
    Object.defineProperty(StoreComponent.prototype, "pageCount", {
        get: function () {
            var productsCount = this.repository.getProducts(this.selectedCategory).length, pageCount = Math.ceil(productsCount / this.productsPerPage);
            return pageCount;
        },
        enumerable: true,
        configurable: true
    });
    // get pageNumbers(): number[] {
    //     var productsCount = this.repository.getProducts(this.selectedCategory).length,
    //         pageCount = Math.ceil(productsCount / this.productsPerPage);
    //     return Array(pageCount).fill(0).map((x, inx) => inx + 1);
    // }
    StoreComponent.decorators = [
        { type: Component, args: [{
                    selector: "store",
                    moduleId: module.id,
                    templateUrl: "store.component.html"
                },] },
    ];
    /** @nocollapse */
    StoreComponent.ctorParameters = [
        { type: ProductRepository, },
        { type: Cart, },
        { type: Router, },
    ];
    return StoreComponent;
}());
