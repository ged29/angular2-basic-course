import { Component, Input, ViewChildren, QueryList } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { PaCellBgColor } from "./cellBgColor.directive";
import { DiscountService } from "./discount.service";

@Component({
    moduleId: module.id,
    selector: "paProductTable",
    templateUrl: "productTable.component.html"
})
export class ProductTableComponent {
    showTable: boolean = true;

    constructor(private repository: ProductRepository) {
    }

    getProduct(id: string) {
        return this.repository.getProduct(Number(id));
    }

    getProducts() {
        return this.repository.getProducts();
    }

    deleteProduct(id: string) {
        this.repository.deleteProduct(Number(id));
    }

    dateObject: Date = new Date(2020, 1, 20);
    dateString: string = "2020-02-20T00:00:00.000Z";
    dateNumber: number = 1582156800000;
}