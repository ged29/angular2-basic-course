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
import { PaAddTaxPipe } from "./addTax.pipe";
import { PaCategoryFilterPipe } from "./categoryFilter.pipe";
import { LOCALE_ID } from "@angular/core";
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { DiscountService } from "./discount.service";
import { PaDiscountAmountDirective } from "./discountAmount.directive";
import { ProductDataSource } from "./product.datasource";
import { ProductRepository } from "./product.repository";
import { LogService, LogLevel, LOG_SERVICE, LOG_LEVEL, TEST_LEVEL } from "./log.service";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [ProductComponent, PaAttrDirective, PaEnhanceDirective, PaModel,
        PaStructuredDirective, PaIteratorDirective, PaCellBgColor, PaCellBgColorSwitcher,
        ProductTableComponent, ProductFormComponent, ToggleViewComponent,
        PaAddTaxPipe, PaCategoryFilterPipe,
        PaDiscountDisplayComponent, PaDiscountEditorComponent,
        PaDiscountAmountDirective],
    //providers: [{ provide: LOCALE_ID, useValue: "ru-RU" }],
    providers: [DiscountService, ProductDataSource, ProductRepository,
        {
            provide: LOG_LEVEL, useValue: LogLevel.DEBUG
        },
        {
            provide: "debugLevel", useExisting: LOG_LEVEL
        },
        {
            provide: TEST_LEVEL, useValue: "test me"
        },
        {
            provide: LogService,
            deps: ["debugLevel", TEST_LEVEL],
            useFactory: (level, test) => {
                let logger = new LogService();
                logger.minimumLevel = level;
                return logger;
            }
        }],
    bootstrap: [ProductComponent]
})
export class AppModule { }
