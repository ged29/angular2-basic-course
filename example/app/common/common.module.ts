import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module";
import { DiscountService } from "./discount.service";
import { LOG_LEVEL, LogLevel, TEST_LEVEL, LogService } from "./log.service";
import { PaAddTaxPipe } from "./addTax.pipe";
import { PaAttrDirective } from "./attr.directive";
import { PaEnhanceDirective } from "./attrEnhance.directive";
import { PaCategoryFilterPipe } from "./categoryFilter.pipe";
import { PaCellBgColor } from "./cellBgColor.directive";
import { PaCellBgColorSwitcher } from "./cellBgColorSwitcher.directive";
import { PaDiscountPipe } from "./discount.pipe";
import { PaDiscountAmountDirective } from "./discountAmount.directive";
import { PaIteratorDirective } from "./iterator.directive";
import { PaStructuredDirective } from "./paif.directive";
import { PaModel } from "./twoway.directive";
import { PaDisplayValueDirective } from "./valueDisplay.directive";

@NgModule({
    imports: [ModelModule],
    providers: [DiscountService,
        {
            provide: LOG_LEVEL, useValue: LogLevel.INFO
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
    declarations: [
        PaAddTaxPipe, PaAttrDirective, PaEnhanceDirective, PaCategoryFilterPipe, PaCellBgColor, PaCellBgColorSwitcher,
        PaDiscountPipe, PaDiscountAmountDirective, PaIteratorDirective, PaStructuredDirective, PaModel, PaDisplayValueDirective],
    exports: [
        PaAddTaxPipe, PaAttrDirective, PaEnhanceDirective, PaCategoryFilterPipe, PaCellBgColor, PaCellBgColorSwitcher,
        PaDiscountPipe, PaDiscountAmountDirective, PaIteratorDirective, PaStructuredDirective, PaModel, PaDisplayValueDirective]
})
export class CommonModule { } 