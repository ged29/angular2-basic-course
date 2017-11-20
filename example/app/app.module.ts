import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductComponent } from "./product.component";
import { PaAttrDirective } from "./attr.directive";
import { PaEnhanceDirective } from "./attrEnhance.directive";
import { PaModel } from "./twoway.directive";
import { PaStructuredDirective } from "./paif.directive";
import { PaIteratorDirective } from "./iterator.directive";
import { PaCellBgColor } from "./cellBgColor.directive";
import { PaCellBgColorSwitcher } from "./cellBgColorSwitcher.directive";
import { ProductTableComponent } from "./productTable.component";
import { ProductFormComponent } from "./productForm.component";
import { ToggleViewComponent } from "./toggleView.component";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [ProductComponent, PaAttrDirective, PaEnhanceDirective, PaModel,
        PaStructuredDirective, PaIteratorDirective, PaCellBgColor, PaCellBgColorSwitcher,
        ProductTableComponent, ProductFormComponent, ToggleViewComponent],
    bootstrap: [ProductComponent]
})
export class AppModule { }
