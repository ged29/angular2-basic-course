import { Injectable } from "@angular/core";
import { RestDataSource } from "./rest.datasource";
export var OrderRepository = (function () {
    function OrderRepository(dataSource) {
        this.dataSource = dataSource;
        this.orders = [];
        this.loaded = false;
    }
    OrderRepository.prototype.loadOrders = function () {
        var _this = this;
        this.dataSource.getOrders().subscribe(function (orders) {
            _this.orders = orders;
            _this.loaded = true;
        }, function (error) { return _this.loaded = false; });
    };
    OrderRepository.prototype.getOrders = function () {
        if (!this.loaded) {
            this.loadOrders();
        }
        return this.orders;
    };
    OrderRepository.prototype.saveOrder = function (order) {
        return this.dataSource.saveOrder(order);
    };
    OrderRepository.prototype.updateOrder = function (order) {
        var _this = this;
        this.dataSource.updateOrder(order).subscribe(function (o) { return _this.orders.splice(_this.getOrderIndex(o), 1, o); });
    };
    OrderRepository.prototype.deleteOrder = function (id) {
        var _this = this;
        this.dataSource.deleteOrder(id).subscribe(function (o) { return _this.orders.splice(_this.getOrderIndex(o), 1); });
    };
    OrderRepository.prototype.getOrderIndex = function (order) {
        return this.orders.findIndex(function (o) { return o.id === order.id; });
    };
    OrderRepository.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    OrderRepository.ctorParameters = [
        { type: RestDataSource, },
    ];
    return OrderRepository;
}());
