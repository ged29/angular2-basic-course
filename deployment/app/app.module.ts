import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { CheckoutComponent } from "./store/checkout.component";
import { StoreFirstGuard } from "./storeFirst.guard";
import { AdminModule } from "./admin/admin.module";
import { AuthComponent } from "./admin/auth.component";
import { AdminComponent } from "./admin/admin.component";
import { ProductTableComponent } from "./admin/productTable.component";
import { ProductEditorComponent } from "./admin/productEditor.component";
import { OrderTableComponent } from "./admin/orderTable.component";
import { AuthGuard } from "./admin/auth.guard";

const routing = RouterModule.forRoot([
    {
        path: "store", component: StoreComponent, canActivate: [StoreFirstGuard]
    },
    {
        path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard]
    },
    {
        path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard]
    },
    {   // when the application navigates to the /admin URL, it should load a
        // feature module defined by a class called AdminModule from the /app/admin/admin.module.ts file.
        path: "admin",
        children: [
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
            }
        ]
    },
    {
        path: "**", redirectTo: "/store"
    }], /*{
        enableTracing: true
    }*/);

@NgModule({
    imports: [BrowserModule, StoreModule, AdminModule, routing],
    providers: [StoreFirstGuard],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }