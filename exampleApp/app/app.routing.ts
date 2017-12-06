import { Routes, RouterModule } from "@angular/router";
import { TableComponent } from "./core/table.component";
import { FormComponent } from "./core/form.component";
import { ModuleWithProviders } from "@angular/core";
import { NotFoundComponent } from "./core/notFound.component";

const routes: Routes = [
    { path: "form/:mode/:id", component: FormComponent },  // http://localhost:3000/form/edit => FormComponent
    { path: "form/:mode", component: FormComponent },      // http://localhost:3000/form/create => FormComponent
    { path: "", component: TableComponent },               // http://localhost:3000/ => TableComponent
    { path: "**", component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);