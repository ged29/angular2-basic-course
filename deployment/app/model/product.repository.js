import { Injectable } from "@angular/core";
import { RestDataSource } from "./rest.datasource";
export var ProductRepository = (function () {
    function ProductRepository(dataSource) {
        var _this = this;
        this.dataSource = dataSource;
        this.products = [];
        this.categories = [];
        dataSource.getProducts().subscribe(function (products) {
            _this.products = products;
            _this.categories = products
                .map(function (p) { return p.category; })
                .filter(function (category, index, categories) { return categories.indexOf(category) === index; })
                .sort();
        });
    }
    ProductRepository.prototype.getProducts = function (category) {
        return !category ? this.products : this.products.filter(function (p) { return p.category === category; });
    };
    ProductRepository.prototype.getProduct = function (id) {
        return this.products.find(function (p) { return p.id === id; });
    };
    ProductRepository.prototype.saveProduct = function (product) {
        var _this = this;
        var isNewProduct = product.id === undefined;
        if (isNewProduct) {
            this.dataSource.saveProduct(product).subscribe(function (p) { return _this.products.push(p); });
        }
        else {
            this.dataSource.updateProduct(product).subscribe(function (p) {
                _this.products.splice(_this.getProductIndex(p), 1, p);
            });
        }
    };
    ProductRepository.prototype.deleteProduct = function (id) {
        var _this = this;
        this.dataSource.deleteProduct(id).subscribe(function (p) { return _this.products.splice(_this.getProductIndex(p), 1); });
    };
    ProductRepository.prototype.getCategories = function () {
        return this.categories;
    };
    ProductRepository.prototype.getProductIndex = function (product) {
        return this.products.findIndex(function (p) { return p.id === product.id; });
    };
    ProductRepository.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ProductRepository.ctorParameters = [
        { type: RestDataSource, },
    ];
    return ProductRepository;
}());
