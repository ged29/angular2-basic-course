"use strict";
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var import0 = require("@angular/core/src/linker/ng_module_factory");
var import1 = require("../../../app/store/store.module");
var import2 = require("@angular/common/src/common_module");
var import3 = require("@angular/core/src/application_module");
var import4 = require("@angular/platform-browser/src/browser");
var import5 = require("@angular/forms/src/directives");
var import6 = require("@angular/forms/src/form_providers");
var import7 = require("@angular/router/src/router_module");
var import8 = require("@angular/http/src/http_module");
var import9 = require("../../../app/model/model.module");
var import10 = require("@angular/common/src/localization");
var import11 = require("@angular/core/src/application_init");
var import12 = require("@angular/core/src/testability/testability");
var import13 = require("@angular/core/src/application_ref");
var import14 = require("@angular/core/src/linker/compiler");
var import15 = require("@angular/platform-browser/src/dom/events/hammer_gestures");
var import16 = require("@angular/platform-browser/src/dom/events/event_manager");
var import17 = require("@angular/platform-browser/src/dom/shared_styles_host");
var import18 = require("@angular/platform-browser/src/dom/dom_renderer");
var import19 = require("@angular/platform-browser/src/security/dom_sanitization_service");
var import20 = require("@angular/core/src/linker/view_utils");
var import21 = require("@angular/platform-browser/src/browser/title");
var import22 = require("@angular/forms/src/directives/radio_control_value_accessor");
var import23 = require("@angular/http/src/backends/browser_xhr");
var import24 = require("@angular/http/src/base_response_options");
var import25 = require("@angular/http/src/backends/xhr_backend");
var import26 = require("@angular/http/src/base_request_options");
var import27 = require("../../../app/model/rest.datasource");
var import28 = require("../../../app/model/product.repository");
var import29 = require("../../../app/model/cart.model");
var import30 = require("../../../app/model/order.model");
var import31 = require("../../../app/model/order.repository");
var import32 = require("../../../app/model/auth.service");
var import34 = require("@angular/core/src/application_tokens");
var import35 = require("@angular/platform-browser/src/dom/events/dom_events");
var import36 = require("@angular/platform-browser/src/dom/events/key_events");
var import37 = require("@angular/core/src/zone/ng_zone");
var import38 = require("@angular/platform-browser/src/dom/debug/ng_probe");
var import39 = require("@angular/core/src/console");
var import40 = require("@angular/core/src/i18n/tokens");
var import41 = require("@angular/core/src/error_handler");
var import42 = require("@angular/platform-browser/src/dom/dom_tokens");
var import43 = require("@angular/platform-browser/src/dom/animation_driver");
var import44 = require("@angular/core/src/render/api");
var import45 = require("@angular/core/src/security");
var import46 = require("@angular/core/src/change_detection/differs/iterable_differs");
var import47 = require("@angular/core/src/change_detection/differs/keyvalue_differs");
var import48 = require("@angular/http/src/interfaces");
var import49 = require("@angular/http/src/http");
var StoreModuleInjector = (function (_super) {
    __extends(StoreModuleInjector, _super);
    function StoreModuleInjector(parent) {
        return _super.call(this, parent, [], []) || this;
    }
    Object.defineProperty(StoreModuleInjector.prototype, "_LOCALE_ID_9", {
        get: function () {
            if ((this.__LOCALE_ID_9 == null)) {
                (this.__LOCALE_ID_9 = 'en-US');
            }
            return this.__LOCALE_ID_9;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_NgLocalization_10", {
        get: function () {
            if ((this.__NgLocalization_10 == null)) {
                (this.__NgLocalization_10 = new import10.NgLocaleLocalization(this._LOCALE_ID_9));
            }
            return this.__NgLocalization_10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_ApplicationRef_15", {
        get: function () {
            if ((this.__ApplicationRef_15 == null)) {
                (this.__ApplicationRef_15 = this._ApplicationRef__14);
            }
            return this.__ApplicationRef_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_Compiler_16", {
        get: function () {
            if ((this.__Compiler_16 == null)) {
                (this.__Compiler_16 = new import14.Compiler());
            }
            return this.__Compiler_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_APP_ID_17", {
        get: function () {
            if ((this.__APP_ID_17 == null)) {
                (this.__APP_ID_17 = import34._appIdRandomProviderFactory());
            }
            return this.__APP_ID_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_DOCUMENT_18", {
        get: function () {
            if ((this.__DOCUMENT_18 == null)) {
                (this.__DOCUMENT_18 = import4._document());
            }
            return this.__DOCUMENT_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_19", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_19 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_19 = new import15.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_20", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_20 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_20 = [
                    new import35.DomEventsPlugin(),
                    new import36.KeyEventsPlugin(),
                    new import15.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_19)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_EventManager_21", {
        get: function () {
            if ((this.__EventManager_21 == null)) {
                (this.__EventManager_21 = new import16.EventManager(this._EVENT_MANAGER_PLUGINS_20, this.parent.get(import37.NgZone)));
            }
            return this.__EventManager_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_DomSharedStylesHost_22", {
        get: function () {
            if ((this.__DomSharedStylesHost_22 == null)) {
                (this.__DomSharedStylesHost_22 = new import17.DomSharedStylesHost(this._DOCUMENT_18));
            }
            return this.__DomSharedStylesHost_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_AnimationDriver_23", {
        get: function () {
            if ((this.__AnimationDriver_23 == null)) {
                (this.__AnimationDriver_23 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_DomRootRenderer_24", {
        get: function () {
            if ((this.__DomRootRenderer_24 == null)) {
                (this.__DomRootRenderer_24 = new import18.DomRootRenderer_(this._DOCUMENT_18, this._EventManager_21, this._DomSharedStylesHost_22, this._AnimationDriver_23, this._APP_ID_17));
            }
            return this.__DomRootRenderer_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_RootRenderer_25", {
        get: function () {
            if ((this.__RootRenderer_25 == null)) {
                (this.__RootRenderer_25 = import38._createConditionalRootRenderer(this._DomRootRenderer_24, this.parent.get(import38.NgProbeToken, null)));
            }
            return this.__RootRenderer_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_DomSanitizer_26", {
        get: function () {
            if ((this.__DomSanitizer_26 == null)) {
                (this.__DomSanitizer_26 = new import19.DomSanitizerImpl());
            }
            return this.__DomSanitizer_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_Sanitizer_27", {
        get: function () {
            if ((this.__Sanitizer_27 == null)) {
                (this.__Sanitizer_27 = this._DomSanitizer_26);
            }
            return this.__Sanitizer_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_ViewUtils_28", {
        get: function () {
            if ((this.__ViewUtils_28 == null)) {
                (this.__ViewUtils_28 = new import20.ViewUtils(this._RootRenderer_25, this._Sanitizer_27));
            }
            return this.__ViewUtils_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_IterableDiffers_29", {
        get: function () {
            if ((this.__IterableDiffers_29 == null)) {
                (this.__IterableDiffers_29 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_KeyValueDiffers_30", {
        get: function () {
            if ((this.__KeyValueDiffers_30 == null)) {
                (this.__KeyValueDiffers_30 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_SharedStylesHost_31", {
        get: function () {
            if ((this.__SharedStylesHost_31 == null)) {
                (this.__SharedStylesHost_31 = this._DomSharedStylesHost_22);
            }
            return this.__SharedStylesHost_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_Title_32", {
        get: function () {
            if ((this.__Title_32 == null)) {
                (this.__Title_32 = new import21.Title());
            }
            return this.__Title_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_RadioControlRegistry_33", {
        get: function () {
            if ((this.__RadioControlRegistry_33 == null)) {
                (this.__RadioControlRegistry_33 = new import22.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_BrowserXhr_34", {
        get: function () {
            if ((this.__BrowserXhr_34 == null)) {
                (this.__BrowserXhr_34 = new import23.BrowserXhr());
            }
            return this.__BrowserXhr_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_ResponseOptions_35", {
        get: function () {
            if ((this.__ResponseOptions_35 == null)) {
                (this.__ResponseOptions_35 = new import24.BaseResponseOptions());
            }
            return this.__ResponseOptions_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_XSRFStrategy_36", {
        get: function () {
            if ((this.__XSRFStrategy_36 == null)) {
                (this.__XSRFStrategy_36 = import8._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_XHRBackend_37", {
        get: function () {
            if ((this.__XHRBackend_37 == null)) {
                (this.__XHRBackend_37 = new import25.XHRBackend(this._BrowserXhr_34, this._ResponseOptions_35, this._XSRFStrategy_36));
            }
            return this.__XHRBackend_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_RequestOptions_38", {
        get: function () {
            if ((this.__RequestOptions_38 == null)) {
                (this.__RequestOptions_38 = new import26.BaseRequestOptions());
            }
            return this.__RequestOptions_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_Http_39", {
        get: function () {
            if ((this.__Http_39 == null)) {
                (this.__Http_39 = import8.httpFactory(this._XHRBackend_37, this._RequestOptions_38));
            }
            return this.__Http_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_RestDataSource_40", {
        get: function () {
            if ((this.__RestDataSource_40 == null)) {
                (this.__RestDataSource_40 = new import27.RestDataSource(this._Http_39));
            }
            return this.__RestDataSource_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_ProductRepository_41", {
        get: function () {
            if ((this.__ProductRepository_41 == null)) {
                (this.__ProductRepository_41 = new import28.ProductRepository(this._RestDataSource_40));
            }
            return this.__ProductRepository_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_Cart_42", {
        get: function () {
            if ((this.__Cart_42 == null)) {
                (this.__Cart_42 = new import29.Cart());
            }
            return this.__Cart_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_Order_43", {
        get: function () {
            if ((this.__Order_43 == null)) {
                (this.__Order_43 = new import30.Order(this._Cart_42));
            }
            return this.__Order_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_OrderRepository_44", {
        get: function () {
            if ((this.__OrderRepository_44 == null)) {
                (this.__OrderRepository_44 = new import31.OrderRepository(this._RestDataSource_40));
            }
            return this.__OrderRepository_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreModuleInjector.prototype, "_AuthService_45", {
        get: function () {
            if ((this.__AuthService_45 == null)) {
                (this.__AuthService_45 = new import32.AuthService(this._RestDataSource_40));
            }
            return this.__AuthService_45;
        },
        enumerable: true,
        configurable: true
    });
    StoreModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._InternalFormsSharedModule_3 = new import5.InternalFormsSharedModule();
        this._FormsModule_4 = new import6.FormsModule();
        this._RouterModule_5 = new import7.RouterModule(this.parent.get(import7.ROUTER_FORROOT_GUARD, null));
        this._HttpModule_6 = new import8.HttpModule();
        this._ModelModule_7 = new import9.ModelModule();
        this._StoreModule_8 = new import1.StoreModule();
        this._ErrorHandler_11 = import4.errorHandler();
        this._ApplicationInitStatus_12 = new import11.ApplicationInitStatus(this.parent.get(import11.APP_INITIALIZER, null));
        this._Testability_13 = new import12.Testability(this.parent.get(import37.NgZone));
        this._ApplicationRef__14 = new import13.ApplicationRef_(this.parent.get(import37.NgZone), this.parent.get(import39.Console), this, this._ErrorHandler_11, this, this._ApplicationInitStatus_12, this.parent.get(import12.TestabilityRegistry, null), this._Testability_13);
        return this._StoreModule_8;
    };
    StoreModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_3;
        }
        if ((token === import6.FormsModule)) {
            return this._FormsModule_4;
        }
        if ((token === import7.RouterModule)) {
            return this._RouterModule_5;
        }
        if ((token === import8.HttpModule)) {
            return this._HttpModule_6;
        }
        if ((token === import9.ModelModule)) {
            return this._ModelModule_7;
        }
        if ((token === import1.StoreModule)) {
            return this._StoreModule_8;
        }
        if ((token === import40.LOCALE_ID)) {
            return this._LOCALE_ID_9;
        }
        if ((token === import10.NgLocalization)) {
            return this._NgLocalization_10;
        }
        if ((token === import41.ErrorHandler)) {
            return this._ErrorHandler_11;
        }
        if ((token === import11.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_12;
        }
        if ((token === import12.Testability)) {
            return this._Testability_13;
        }
        if ((token === import13.ApplicationRef_)) {
            return this._ApplicationRef__14;
        }
        if ((token === import13.ApplicationRef)) {
            return this._ApplicationRef_15;
        }
        if ((token === import14.Compiler)) {
            return this._Compiler_16;
        }
        if ((token === import34.APP_ID)) {
            return this._APP_ID_17;
        }
        if ((token === import42.DOCUMENT)) {
            return this._DOCUMENT_18;
        }
        if ((token === import15.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_19;
        }
        if ((token === import16.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_20;
        }
        if ((token === import16.EventManager)) {
            return this._EventManager_21;
        }
        if ((token === import17.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_22;
        }
        if ((token === import43.AnimationDriver)) {
            return this._AnimationDriver_23;
        }
        if ((token === import18.DomRootRenderer)) {
            return this._DomRootRenderer_24;
        }
        if ((token === import44.RootRenderer)) {
            return this._RootRenderer_25;
        }
        if ((token === import19.DomSanitizer)) {
            return this._DomSanitizer_26;
        }
        if ((token === import45.Sanitizer)) {
            return this._Sanitizer_27;
        }
        if ((token === import20.ViewUtils)) {
            return this._ViewUtils_28;
        }
        if ((token === import46.IterableDiffers)) {
            return this._IterableDiffers_29;
        }
        if ((token === import47.KeyValueDiffers)) {
            return this._KeyValueDiffers_30;
        }
        if ((token === import17.SharedStylesHost)) {
            return this._SharedStylesHost_31;
        }
        if ((token === import21.Title)) {
            return this._Title_32;
        }
        if ((token === import22.RadioControlRegistry)) {
            return this._RadioControlRegistry_33;
        }
        if ((token === import23.BrowserXhr)) {
            return this._BrowserXhr_34;
        }
        if ((token === import24.ResponseOptions)) {
            return this._ResponseOptions_35;
        }
        if ((token === import48.XSRFStrategy)) {
            return this._XSRFStrategy_36;
        }
        if ((token === import25.XHRBackend)) {
            return this._XHRBackend_37;
        }
        if ((token === import26.RequestOptions)) {
            return this._RequestOptions_38;
        }
        if ((token === import49.Http)) {
            return this._Http_39;
        }
        if ((token === import27.RestDataSource)) {
            return this._RestDataSource_40;
        }
        if ((token === import28.ProductRepository)) {
            return this._ProductRepository_41;
        }
        if ((token === import29.Cart)) {
            return this._Cart_42;
        }
        if ((token === import30.Order)) {
            return this._Order_43;
        }
        if ((token === import31.OrderRepository)) {
            return this._OrderRepository_44;
        }
        if ((token === import32.AuthService)) {
            return this._AuthService_45;
        }
        return notFoundResult;
    };
    StoreModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__14.ngOnDestroy();
    };
    return StoreModuleInjector;
}(import0.NgModuleInjector));
exports.StoreModuleNgFactory = new import0.NgModuleFactory(StoreModuleInjector, import1.StoreModule);
