import { NgModule } from "@angular/core";
import { ProductDataSource } from "./product.datasource";
import { ProductRepository } from "./product.repository";

@NgModule({
    providers: [ProductRepository, ProductDataSource]
})
export class ModelModule { }