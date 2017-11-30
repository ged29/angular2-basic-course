import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class Model {
    private products: Product[];
    private locator = (p: Product, id: number) => p.id == id;

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

    saveProduct(product: Product) {
        if (product.id == 0 || product.id == undefined) {
            this.dataSource
                .saveProduct(product)
                .subscribe(p => this.products.push(product));
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
        this.dataSource.deleteProduct(id).subscribe(deletedProduct => {
            let findId = deletedProduct.id,
                index = this.products.findIndex(p => this.locator(p, findId));
            this.products.splice(index, 1);
        });
    }
}
