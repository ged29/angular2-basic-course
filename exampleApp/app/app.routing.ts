import { Routes, RouterModule } from "@angular/router";
import { TableComponent } from "./core/table.component";
import { FormComponent } from "./core/form.component";
import { ModuleWithProviders } from "@angular/core";
import { NotFoundComponent } from "./core/notFound.component";
import { ProductCountComponent } from "./core/productCount.component";
import { CategoryCountComponent } from "./core/categoryCount.component";
import { ModelResolver } from "./model/model.resolver";

const childRoutes: Routes = [
    {
        path: "",
        children: [
            { path: "products", component: ProductCountComponent },
            { path: "categories", component: CategoryCountComponent },
            { path: "", component: ProductCountComponent } // componentless route
        ],
        resolve: { model: ModelResolver }
    }];

const routes: Routes = [
    {   // http://localhost:3000/form/edit => FormComponent
        path: "form/:mode/:id", component: FormComponent,
        resolve: { modelA: ModelResolver }
    },
    {   // http://localhost:3000/form/create => FormComponent
        path: "form/:mode", component: FormComponent,
        resolve: { modelA: ModelResolver }
    },
    { path: "table", component: TableComponent, children: childRoutes },
    { path: "table/:category", component: TableComponent, children: childRoutes },
    { path: "", redirectTo: "/table", pathMatch: "full" }, // http://localhost:3000/ => TableComponent
    { path: "**", component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);