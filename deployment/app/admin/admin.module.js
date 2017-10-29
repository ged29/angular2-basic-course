import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { AuthGuard } from "./auth.guard";
import { ProductEditorComponent } from "./productEditor.component";
import { ProductTableComponent } from "./productTable.component";
import { OrderTableComponent } from "./orderTable.component";
var routing = RouterModule.forChild([
    {
        path: "auth", component: AuthComponent
    },
    {
        path: "main", component: AdminComponent, canActivate: [AuthGuard],
        children: [
            /**
             * /admin/main/products
             *   Navigating to this URL will display all the products in a table, along
             *   with buttons that allow an existing product to be edited or deleted and a new product to be created.
             */
            { path: "products", component: ProductTableComponent },
            /**
             * /admin/main/products/create
             * Navigating to this URL will present the user with an empty editor for creating a new product.
             */
            { path: "products/:mode", component: ProductEditorComponent },
            /**
             * /admin/main/products/edit/1
             * Navigating to this URL will present the user with a populated editor for editing an existing product.
             */
            { path: "products/:mode/:id", component: ProductEditorComponent },
            /**
             * /admin/main/orders
             *   Navigating to this URL will present the user with all the orders in a table,
             *   along with buttons to mark an order shipped and to cancel an order by deleting it
             */
            { path: "orders", component: OrderTableComponent },
            { path: "**", redirectTo: "products" }
        ]
    },
    {
        path: "**", redirectTo: "auth"
    }]);
// dynamically loaded module
export var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, RouterModule],
                    providers: [AuthGuard],
                    declarations: [AuthComponent, AdminComponent, ProductTableComponent, ProductEditorComponent, OrderTableComponent]
                },] },
    ];
    /** @nocollapse */
    AdminModule.ctorParameters = [];
    return AdminModule;
}());
