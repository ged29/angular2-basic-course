import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Order } from "./order.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class OrderRepository {
    private orders: Order[] = [];
    private loaded: boolean = false;

    constructor(private dataSource: RestDataSource) {
    }

    private loadOrders() {
        this.dataSource.getOrders().subscribe(
            orders => {
                this.orders = orders;
                this.loaded = true;
            }, error => this.loaded = false);
    }

    getOrders() {
        if (!this.loaded) {
            this.loadOrders();
        }
        return this.orders;
    }

    saveOrder(order: Order): Observable<Order> {
        return this.dataSource.saveOrder(order);
    }

    updateOrder(order: Order) {
        this.dataSource.updateOrder(order).subscribe(o => this.orders.splice(this.getOrderIndex(o), 1, o));
    }

    deleteOrder(id: number) {
        this.dataSource.deleteOrder(id).subscribe(o => this.orders.splice(this.getOrderIndex(o), 1));
    }

    private getOrderIndex(order: Order) {
        return this.orders.findIndex(o => o.id === order.id);
    }
}