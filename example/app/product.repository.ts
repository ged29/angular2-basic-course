import { Product } from "./product.model";
import { ProductDataSource } from "./product.datasource";

export class ProductRepository {
    private dataSource: ProductDataSource;
    private products: Product[];
    private locator = (product: Product, id: number) => product.id === id;

    constructor() {
        this.dataSource = new ProductDataSource();
        this.products = new Array<Product>();
        this.dataSource.getData().forEach(p => this.products.push(p));
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number): Product {
        return this.products.find(p => this.locator(p, id));
    }

    saveProduct(product: Product) {
        if (product.id === undefined) {
            product.id = this.generateID();
            this.products.push(product);
        } else {
            let index = this.products
                .findIndex(p => this.locator(p, product.id));
            this.products.splice(index, 1, product);
        }
    }

    deleteProduct(id: number) {
        let index = this.products.findIndex(p => this.locator(p, id));
        if (index > -1) {
            this.products.splice(index, 1);
        }
    }

    swapProducts() {
        let p = this.products.shift();
        this.products.push(new Product(p.id, p.name, p.category, p.price));
    }

    private generateID(): number {
        let candidate = 100;
        while (this.getProduct(candidate) !== undefined) {
            candidate++;
        }
        return candidate;
    }
}
