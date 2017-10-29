import { Component } from "@angular/core";
import { OrderRepository } from "../model/order.repository";
import { Order } from "../model/order.model";

@Component({
    moduleId: module.id,
    templateUrl: "orderTable.component.html"
})
export class OrderTableComponent {
    includeShipped: boolean;

    constructor(private repository: OrderRepository) {
        this.includeShipped = false;
    }

    getOrders(): Order[] {
        return this.repository.getOrders().filter(order => this.includeShipped || !order.shipped);
    }

    markShipped(order: Order) {
        order.shipped = true;
        this.repository.updateOrder(order);
    }

    delete(id: number) {
        this.repository.deleteOrder(Number(id));
    }
}