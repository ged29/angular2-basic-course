import { Component, Input, ViewChildren, QueryList } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { PaCellBgColor } from "./cellBgColor.directive";

@Component({
    moduleId: module.id,
    selector: "paProductTable",
    templateUrl: "productTable.component.html"
})
export class ProductTableComponent {
    showTable: boolean = true;

    @Input()
    repository: ProductRepository;

    getProduct(id: string) {
        return this.repository.getProduct(Number(id));
    }

    getProducts() {
        return this.repository.getProducts();
    }

    deleteProduct(id: string) {
        this.repository.deleteProduct(Number(id));
    }

    @ViewChildren(PaCellBgColor)
    viewChildren: QueryList<PaCellBgColor>; // set before ngAfterViewInit

    ngAfterViewInit() {
        this.viewChildren.changes.subscribe(() => this.updateViewChildren());
        this.updateViewChildren();
    }

    private updateViewChildren() {
        setTimeout(() => this.viewChildren.forEach((child, index) => child.setColor(index % 2 === 0 ? true : false)), 0);
    }
}