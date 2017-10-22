import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ProductRepository {
    private products: Product[] = [];
    private categories: string[] = [];

    constructor(private dataSource: StaticDataSource) {
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

    getCategories(): string[] {
        return this.categories;
    }
}