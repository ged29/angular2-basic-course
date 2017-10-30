"use strict";
var product_model_1 = require("./product.model");
var ProductDataSource = (function () {
    function ProductDataSource() {
        this.data = new Array(new product_model_1.Product(1, "Kayak", "Watersports", 275), new product_model_1.Product(2, "Lifejacket", "Watersports", 48.95), new product_model_1.Product(3, "Soccer Ball", "Soccer", 19.50), new product_model_1.Product(4, "Corner Flags", "Soccer", 34.95), new product_model_1.Product(5, "Thinking Cap", "Chess", 16));
    }
    ProductDataSource.prototype.getData = function () {
        return this.data;
    };
    return ProductDataSource;
}());
exports.ProductDataSource = ProductDataSource;
//# sourceMappingURL=product.datasource.js.map