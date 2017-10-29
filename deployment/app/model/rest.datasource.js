import { Injectable } from "@angular/core";
import { Http, Request, RequestMethod } from "@angular/http";
import "rxjs/add/operator/map";
var PROTOCOL = "http";
var PORT = 3500;
export var RestDataSource = (function () {
    function RestDataSource(http) {
        this.http = http;
        this.baseUrl = PROTOCOL + "://" + location.hostname + ":" + PORT + "/";
    }
    RestDataSource.prototype.authenticate = function (userName, password) {
        var _this = this;
        var authCommand = new Request({
            method: RequestMethod.Post,
            url: this.baseUrl + "login",
            body: { name: userName, password: password }
        });
        return this.http
            .request(authCommand)
            .map(function (response) {
            var result = response.json();
            _this.auth_token = result.success ? result.token : null;
            return result.success;
        });
    };
    //#region Products
    RestDataSource.prototype.getProducts = function () {
        return this.sendRequest(RequestMethod.Get, "products");
    };
    RestDataSource.prototype.saveProduct = function (product) {
        return this.sendRequest(RequestMethod.Post, "products", product, true);
    };
    RestDataSource.prototype.updateProduct = function (product) {
        return this.sendRequest(RequestMethod.Put, "products/" + product.id, product, true);
    };
    RestDataSource.prototype.deleteProduct = function (id) {
        return this.sendRequest(RequestMethod.Delete, "products/" + id, null, true);
    };
    //#endregion
    //#region Order
    RestDataSource.prototype.getOrders = function () {
        return this.sendRequest(RequestMethod.Get, "orders", null, true);
    };
    RestDataSource.prototype.saveOrder = function (order) {
        return this.sendRequest(RequestMethod.Post, "orders", order);
    };
    RestDataSource.prototype.updateOrder = function (order) {
        return this.sendRequest(RequestMethod.Put, "orders/" + order.id, order, true);
    };
    RestDataSource.prototype.deleteOrder = function (id) {
        return this.sendRequest(RequestMethod.Delete, "orders/" + id, null, true);
    };
    //#endregion
    RestDataSource.prototype.sendRequest = function (method, path, body, isAuthRequired) {
        if (isAuthRequired === void 0) { isAuthRequired = false; }
        var reqCommand = new Request({
            method: method,
            url: this.baseUrl + path,
            body: body
        });
        if (isAuthRequired && this.auth_token !== undefined) {
            // set the authorization header for this command
            reqCommand.headers.set("authorization", "Bearer<" + this.auth_token + ">");
        }
        return this.http
            .request(reqCommand)
            .map(function (response) { return response.json(); });
    };
    RestDataSource.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    RestDataSource.ctorParameters = [
        { type: Http, },
    ];
    return RestDataSource;
}());
