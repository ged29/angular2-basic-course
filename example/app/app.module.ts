import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductComponent } from "./product.component";
import { ProductTableComponent } from "./productTable.component";
import { ProductFormComponent } from "./productForm.component";
import { ToggleViewComponent } from "./toggleView.component";
import { LOCALE_ID } from "@angular/core";
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { ModelModule } from "./model/model.module";
import { CommonModule } from "./common/common.module";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, ModelModule, CommonModule],
    declarations: [
        ProductComponent, ProductTableComponent, ProductFormComponent, ToggleViewComponent,
        PaDiscountDisplayComponent, PaDiscountEditorComponent],
    bootstrap: [ProductTableComponent, ProductFormComponent]
})
export class AppModule { }