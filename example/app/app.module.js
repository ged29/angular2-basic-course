"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var product_component_1 = require("./product.component");
var attr_directive_1 = require("./attr.directive");
var attrEnhance_directive_1 = require("./attrEnhance.directive");
var twoway_directive_1 = require("./twoway.directive");
var paif_directive_1 = require("./paif.directive");
var iterator_directive_1 = require("./iterator.directive");
var cellBgColor_directive_1 = require("./cellBgColor.directive");
var cellBgColorSwitcher_directive_1 = require("./cellBgColorSwitcher.directive");
var productTable_component_1 = require("./productTable.component");
var productForm_component_1 = require("./productForm.component");
var toggleView_component_1 = require("./toggleView.component");
var addTax_pipe_1 = require("./addTax.pipe");
var categoryFilter_pipe_1 = require("./categoryFilter.pipe");
var discountDisplay_component_1 = require("./discountDisplay.component");
var discountEditor_component_1 = require("./discountEditor.component");
var discount_service_1 = require("./discount.service");
var discountAmount_directive_1 = require("./discountAmount.directive");
var product_datasource_1 = require("./product.datasource");
var product_repository_1 = require("./product.repository");
var log_service_1 = require("./log.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [product_component_1.ProductComponent, attr_directive_1.PaAttrDirective, attrEnhance_directive_1.PaEnhanceDirective, twoway_directive_1.PaModel,
                paif_directive_1.PaStructuredDirective, iterator_directive_1.PaIteratorDirective, cellBgColor_directive_1.PaCellBgColor, cellBgColorSwitcher_directive_1.PaCellBgColorSwitcher,
                productTable_component_1.ProductTableComponent, productForm_component_1.ProductFormComponent, toggleView_component_1.ToggleViewComponent,
                addTax_pipe_1.PaAddTaxPipe, categoryFilter_pipe_1.PaCategoryFilterPipe,
                discountDisplay_component_1.PaDiscountDisplayComponent, discountEditor_component_1.PaDiscountEditorComponent,
                discountAmount_directive_1.PaDiscountAmountDirective],
            //providers: [{ provide: LOCALE_ID, useValue: "ru-RU" }],
            providers: [discount_service_1.DiscountService, product_datasource_1.ProductDataSource, product_repository_1.ProductRepository,
                {
                    provide: log_service_1.LOG_LEVEL, useValue: log_service_1.LogLevel.DEBUG
                },
                {
                    provide: "debugLevel", useExisting: log_service_1.LOG_LEVEL
                },
                {
                    provide: log_service_1.TEST_LEVEL, useValue: "test me"
                },
                {
                    provide: log_service_1.LogService,
                    deps: ["debugLevel", log_service_1.TEST_LEVEL],
                    useFactory: function (level, test) {
                        var logger = new log_service_1.LogService();
                        logger.minimumLevel = level;
                        return logger;
                    }
                }],
            bootstrap: [product_component_1.ProductComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map