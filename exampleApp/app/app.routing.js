"use strict";
var router_1 = require("@angular/router");
var productCount_component_1 = require("./core/productCount.component");
var categoryCount_component_1 = require("./core/categoryCount.component");
var model_resolver_1 = require("./model/model.resolver");
var childRoutes = [
    {
        path: "",
        //canActivateChild: [TermsGuard],
        children: [
            { path: "products", component: productCount_component_1.ProductCountComponent },
            { path: "categories", component: categoryCount_component_1.CategoryCountComponent },
            { path: "", component: productCount_component_1.ProductCountComponent } // componentless route
        ],
        resolve: { model: model_resolver_1.ModelResolver }
    }];
// const routes: Routes = [
//     {
//         path: "ondemand",
//         loadChildren: "app/ondemand/ondemand.module#OndemandModule",
//         canLoad: [LoadGuard]
//     },
//     {   // http://localhost:3000/form/edit => FormComponent
//         path: "form/:mode/:id",
//         component: FormComponent,
//         resolve: { modelA: ModelResolver },
//         canDeactivate: [UnsavedGuard]
//     },
//     {   // http://localhost:3000/form/create => FormComponent
//         path: "form/:mode",
//         component: FormComponent,
//         resolve: { modelA: ModelResolver },
//         canActivate: [TermsGuard]
//     },
//     { path: "table", component: TableComponent, children: childRoutes },
//     { path: "table/:category", component: TableComponent, children: childRoutes },
//     { path: "", redirectTo: "/table", pathMatch: "full" }, // http://localhost:3000/ => TableComponent
//     { path: "**", component: NotFoundComponent }
// ];
var routes = [
    { path: "ondemand", loadChildren: "app/ondemand/ondemand.module#OndemandModule" },
    { path: "", redirectTo: "ondemand", pathMatch: "full" }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map