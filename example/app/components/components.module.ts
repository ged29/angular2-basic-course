import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { CommonModule } from "../common/common.module";
import { ProductComponent } from "./product.component";
import { ProductTableComponent } from "./productTable.component";
import { ProductFormComponent } from "./productForm.component";
import { ToggleViewComponent } from "./toggleView.component";
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule],
    declarations: [
        ProductComponent, ProductTableComponent, ProductFormComponent, ToggleViewComponent,
        PaDiscountDisplayComponent, PaDiscountEditorComponent],
    exports: [ProductTableComponent, ProductFormComponent]
})
export class ComponentsModule { }