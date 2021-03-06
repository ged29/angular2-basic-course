import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Cart } from "../model/cart.model";

@Component({
    selector: "store",
    moduleId: module.id,
    templateUrl: "store.component.html"
})
export class StoreComponent {
    public selectedCategory: string;
    public productsPerPage = 4;
    public selectedPage = 1;

    constructor(
        private repository: ProductRepository,
        private cart: Cart,
        private router: Router) {
    }

    get products(): Product[] {
        // 1 => 0  [4]
        // 2 => 4  [4]
        // 3 => 8  [4]
        // 4 => 12 [4]
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.repository
            .getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    changeCategory(selectedCategory?: string) {
        this.selectedCategory = selectedCategory;
    }

    changePage(selectedPage: number) {
        this.selectedPage = selectedPage;
    }

    changePageSize(newSize: string) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }

    addProductToCart(product: Product) {
        this.cart.addLine(product);
        //this.router.navigateByUrl("/cart");
    }

    get pageCount(): number {
        var productsCount = this.repository.getProducts(this.selectedCategory).length,
            pageCount = Math.ceil(productsCount / this.productsPerPage);

        return pageCount;
    }

    // get pageNumbers(): number[] {
    //     var productsCount = this.repository.getProducts(this.selectedCategory).length,
    //         pageCount = Math.ceil(productsCount / this.productsPerPage);

    //     return Array(pageCount).fill(0).map((x, inx) => inx + 1);
    // }
}