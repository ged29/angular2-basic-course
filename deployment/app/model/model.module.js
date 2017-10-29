import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { RestDataSource } from "./rest.datasource";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { HttpModule } from "@angular/http";
import { AuthService } from "./auth.service";
export var ModelModule = (function () {
    function ModelModule() {
    }
    ModelModule.decorators = [
        { type: NgModule, args: [{
                    imports: [HttpModule],
                    // classes should be used as services for the dependency injection feature
                    providers: [ProductRepository, RestDataSource, Cart, Order, OrderRepository, AuthService]
                },] },
    ];
    /** @nocollapse */
    ModelModule.ctorParameters = [];
    return ModelModule;
}());
