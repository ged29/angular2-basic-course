"use strict";
var product_model_1 = require("./product.model");
var product_datasource_1 = require("./product.datasource");
var ProductRepository = (function () {
    function ProductRepository() {
        var _this = this;
        this.locator = function (product, id) { return product.id === id; };
        this.dataSource = new product_datasource_1.ProductDataSource();
        this.products = new Array();
        this.dataSource.getData().forEach(function (p) { return _this.products.push(p); });
    }
    ProductRepository.prototype.getProducts = function () {
        return this.products;
    };
    ProductRepository.prototype.getProduct = function (id) {
        var _this = this;
        return this.products.find(function (p) { return _this.locator(p, id); });
    };
    ProductRepository.prototype.saveProduct = function (product) {
        var _this = this;
        if (product.id === undefined) {
            product.id = this.generateID();
            this.products.push(product);
        }
        else {
            var index = this.products
                .findIndex(function (p) { return _this.locator(p, product.id); });
            this.products.splice(index, 1, product);
        }
    };
    ProductRepository.prototype.deleteProduct = function (id) {
        var _this = this;
        var index = this.products.findIndex(function (p) { return _this.locator(p, id); });
        if (index > -1) {
            this.products.splice(index, 1);
        }
    };
    ProductRepository.prototype.swapProducts = function () {
        var p = this.products.shift();
        this.products.push(new product_model_1.Product(p.id, p.name, p.category, p.price));
    };
    ProductRepository.prototype.generateID = function () {
        var candidate = 100;
        while (this.getProduct(candidate) !== undefined) {
            candidate++;
        }
        return candidate;
    };
    return ProductRepository;
}());
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map