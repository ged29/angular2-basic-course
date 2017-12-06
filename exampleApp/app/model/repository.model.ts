import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class Model {
    private products: Product[];
    private locator = (p: Product, id: number) => p.id === id;

    constructor(private dataSource: RestDataSource) {
        this.products = new Array<Product>();
        this.dataSource.getProducts().subscribe(data => this.products = data);
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number): Product {
        return this.products.find(p => this.locator(p, id));
    }

    getNextProductId(id: number): number {
        let inx = this.products.findIndex(p => this.locator(p, id));
        if (inx === -1) {
            return 0;
        }

        inx = inx + 2 === this.products.length ? 0 : inx + 1;
        return this.products[inx].id;
    }

    getPreviousProductId(id: number): number {
        let inx = this.products.findIndex(p => this.locator(p, id));
        if (inx === -1) {
            return 0;
        }

        inx = inx === 0 ? this.products.length - 1 : inx - 1;
        return this.products[inx].id;
    }

    saveProduct(product: Product) {
        if (product.id === undefined) {
            this.dataSource
                .saveProduct(product)
                .subscribe(p => this.products.push(p));
        }
        else {
            this.dataSource
                .updateProduct(product)
                .subscribe(updatedProduct => {
                    let findId = updatedProduct.id,
                        index = this.products.findIndex(p => this.locator(p, findId));
                    this.products.splice(index, 1, updatedProduct);
                });
        }
    }

    deleteProduct(id: number) {
        this.dataSource
            .deleteProduct(id)
            .subscribe(x => {
                let index = this.products.findIndex(p => this.locator(p, id));
                this.products.splice(index, 1);
            });
    }
}
