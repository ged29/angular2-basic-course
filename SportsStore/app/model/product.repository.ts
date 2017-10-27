import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class ProductRepository {
    private products: Product[] = [];
    private categories: string[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getProducts().subscribe(products => {
            this.products = products;
            this.categories = products
                .map(p => p.category)
                .filter((category, index, categories) => categories.indexOf(category) === index)
                .sort();
        });
    }

    getProducts(category?: string): Product[] {
        return !category ? this.products : this.products.filter(p => p.category === category);
    }

    getProduct(id: number): Product {
        return this.products.find(p => p.id === id);
    }

    saveProduct(product: Product) {
        var isNewProduct = product.id === undefined;

        if (isNewProduct) {
            this.dataSource.saveProduct(product).subscribe(p => this.products.push(p));
        } else {
            this.dataSource.updateProduct(product).subscribe(p => {
                this.products.splice(this.getProductIndex(p), 1, p);
            });
        }
    }

    deleteProduct(id: number) {
        this.dataSource.deleteProduct(id).subscribe(p => this.products.splice(this.getProductIndex(p), 1));
    }

    getCategories(): string[] {
        return this.categories;
    }

    private getProductIndex(product: Product) {
        return this.products.findIndex(p => p.id === product.id);
    }
}