"use strict";
var router_1 = require("@angular/router");
var table_component_1 = require("./core/table.component");
var form_component_1 = require("./core/form.component");
var notFound_component_1 = require("./core/notFound.component");
var productCount_component_1 = require("./core/productCount.component");
var categoryCount_component_1 = require("./core/categoryCount.component");
var model_resolver_1 = require("./model/model.resolver");
var childRoutes = [
    {
        path: "",
        children: [
            { path: "products", component: productCount_component_1.ProductCountComponent },
            { path: "categories", component: categoryCount_component_1.CategoryCountComponent },
            { path: "", component: productCount_component_1.ProductCountComponent } // componentless route
        ],
        resolve: { model: model_resolver_1.ModelResolver }
    }];
var routes = [
    {
        path: "form/:mode/:id", component: form_component_1.FormComponent,
        resolve: { modelA: model_resolver_1.ModelResolver }
    },
    {
        path: "form/:mode", component: form_component_1.FormComponent,
        resolve: { modelA: model_resolver_1.ModelResolver }
    },
    { path: "table", component: table_component_1.TableComponent, children: childRoutes },
    { path: "table/:category", component: table_component_1.TableComponent, children: childRoutes },
    { path: "", redirectTo: "/table", pathMatch: "full" },
    { path: "**", component: notFound_component_1.NotFoundComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map