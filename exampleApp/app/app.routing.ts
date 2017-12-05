import { Routes, RouterModule } from "@angular/router";
import { TableComponent } from "./core/table.component";
import { FormComponent } from "./core/form.component";

const routes: Routes = [
    { path: "form/edit", component: FormComponent },  // http://localhost:3000/form/edit   => FormComponent
    { path: "form/create", component: FormComponent },// http://localhost:3000/form/create => FormComponent
    { path: "", component: TableComponent }           // http://localhost:3000/ => TableComponent
];

export const routing = RouterModule.forRoot(routes);