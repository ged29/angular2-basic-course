import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class Cart {
    public lines: CartLine[] = [];
    public itemCount: number = 0;
    public cartPrice: number = 0;

    addLine(product: Product, quantity: number = 1) {
        let line = this.lines.find(line => line.product.id === product.id);
        if (line !== undefined) {
            line.quantity += quantity;
        } else {
            this.lines.push(new CartLine(product, quantity));
        }

        this.recalculate();
    }

    updateQuantity(product: Product, quantity: number) {
        let line = this.lines.find(line => line.product.id === product.id);
        if (line !== undefined) {
            line.quantity = Number(quantity);
            this.recalculate();
        }
    }

    removeLine(id: number) {
        let lineIndex = this.lines.findIndex(line => line.product.id === id);
        if (lineIndex >= 0) {
            this.lines.splice(lineIndex, 1);
            this.recalculate();
        }
    }

    clear() {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines = [];
    }

    private recalculate() {
        this.itemCount = 0;
        this.cartPrice = 0;

        this.lines.forEach(line => {
            this.itemCount += 1;
            this.cartPrice += line.lineTotal;
        });
    }
}

export class CartLine {
    constructor(
        public product: Product,
        public quantity: number) {
    }

    get lineTotal(): number {
        return this.quantity * this.product.price;
    }
}