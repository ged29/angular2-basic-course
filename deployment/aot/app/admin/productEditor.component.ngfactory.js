/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../app/admin/productEditor.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/model/product.repository';
import * as import9 from '@angular/router/src/router';
import * as import10 from '@angular/router/src/router_state';
import * as import11 from '../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import12 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import13 from '../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import14 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import15 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/common/src/location/location_strategy';
import * as import18 from '@angular/forms/src/directives/default_value_accessor';
import * as import19 from '@angular/forms/src/directives/control_value_accessor';
import * as import20 from '@angular/forms/src/directives/ng_model';
import * as import21 from '@angular/forms/src/directives/ng_control';
import * as import22 from '@angular/forms/src/directives/ng_control_status';
import * as import23 from '@angular/router/src/directives/router_link';
import * as import24 from '@angular/forms/src/directives/ng_form';
import * as import25 from '@angular/forms/src/directives/control_container';
export var Wrapper_ProductEditorComponent = (function () {
    function Wrapper_ProductEditorComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.ProductEditorComponent(p0, p1, p2);
    }
    Wrapper_ProductEditorComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ProductEditorComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_ProductEditorComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_ProductEditorComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ProductEditorComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ProductEditorComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ProductEditorComponent;
}());
var renderType_ProductEditorComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_ProductEditorComponent_Host0 = (function (_super) {
    __extends(View_ProductEditorComponent_Host0, _super);
    function View_ProductEditorComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_ProductEditorComponent_Host0, renderType_ProductEditorComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_ProductEditorComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ProductEditorComponent0(this.viewUtils, this, 0, this._el_0);
        this._ProductEditorComponent_0_3 = new Wrapper_ProductEditorComponent(this.injectorGet(import8.ProductRepository, this.parentIndex), this.injectorGet(import9.Router, this.parentIndex), this.injectorGet(import10.ActivatedRoute, this.parentIndex));
        this.compView_0.create(this._ProductEditorComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._ProductEditorComponent_0_3.context);
    };
    View_ProductEditorComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ProductEditorComponent) && (0 === requestNodeIndex))) {
            return this._ProductEditorComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_ProductEditorComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ProductEditorComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_ProductEditorComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_ProductEditorComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ProductEditorComponent_Host0;
}(import1.AppView));
export var ProductEditorComponentNgFactory = new import7.ComponentFactory('ng-component', View_ProductEditorComponent_Host0, import0.ProductEditorComponent);
var styles_ProductEditorComponent = [];
var renderType_ProductEditorComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_ProductEditorComponent, {});
export var View_ProductEditorComponent0 = (function (_super) {
    __extends(View_ProductEditorComponent0, _super);
    function View_ProductEditorComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_ProductEditorComponent0, renderType_ProductEditorComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._expr_71 = import6.UNINITIALIZED;
        this._expr_72 = import6.UNINITIALIZED;
        this._expr_73 = import6.UNINITIALIZED;
        this._expr_74 = import6.UNINITIALIZED;
    }
    View_ProductEditorComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'bg-primary p-a-1 m-b-1'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'h5', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_6 = import3.createRenderElement(this.renderer, parentRenderNode, 'form', new import3.InlineArray2(2, 'novalidate', ''), null);
        this._NgForm_6_3 = new import11.Wrapper_NgForm(null, null);
        this._ControlContainer_6_4 = this._NgForm_6_3.context;
        this._NgControlStatusGroup_6_5 = new import12.Wrapper_NgControlStatusGroup(this._ControlContainer_6_4);
        this._text_7 = this.renderer.createText(this._el_6, '\n    ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n        ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'label', import3.EMPTY_INLINE_ARRAY, null);
        this._text_11 = this.renderer.createText(this._el_10, 'Name', null);
        this._text_12 = this.renderer.createText(this._el_8, '\n        ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_8, 'input', new import3.InlineArray4(4, 'class', 'form-control', 'name', 'name'), null);
        this._DefaultValueAccessor_13_3 = new import13.Wrapper_DefaultValueAccessor(this.renderer, new import16.ElementRef(this._el_13));
        this._NG_VALUE_ACCESSOR_13_4 = [this._DefaultValueAccessor_13_3.context];
        this._NgModel_13_5 = new import14.Wrapper_NgModel(this._ControlContainer_6_4, null, null, this._NG_VALUE_ACCESSOR_13_4);
        this._NgControl_13_6 = this._NgModel_13_5.context;
        this._NgControlStatus_13_7 = new import12.Wrapper_NgControlStatus(this._NgControl_13_6);
        this._text_14 = this.renderer.createText(this._el_8, '\n    ', null);
        this._text_15 = this.renderer.createText(this._el_6, '\n    ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n        ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'label', import3.EMPTY_INLINE_ARRAY, null);
        this._text_19 = this.renderer.createText(this._el_18, 'Category', null);
        this._text_20 = this.renderer.createText(this._el_16, '\n        ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_16, 'input', new import3.InlineArray4(4, 'class', 'form-control', 'name', 'category'), null);
        this._DefaultValueAccessor_21_3 = new import13.Wrapper_DefaultValueAccessor(this.renderer, new import16.ElementRef(this._el_21));
        this._NG_VALUE_ACCESSOR_21_4 = [this._DefaultValueAccessor_21_3.context];
        this._NgModel_21_5 = new import14.Wrapper_NgModel(this._ControlContainer_6_4, null, null, this._NG_VALUE_ACCESSOR_21_4);
        this._NgControl_21_6 = this._NgModel_21_5.context;
        this._NgControlStatus_21_7 = new import12.Wrapper_NgControlStatus(this._NgControl_21_6);
        this._text_22 = this.renderer.createText(this._el_16, '\n    ', null);
        this._text_23 = this.renderer.createText(this._el_6, '\n    ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_25 = this.renderer.createText(this._el_24, '\n        ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_24, 'label', import3.EMPTY_INLINE_ARRAY, null);
        this._text_27 = this.renderer.createText(this._el_26, 'Description', null);
        this._text_28 = this.renderer.createText(this._el_24, '\n        ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_24, 'textarea', new import3.InlineArray4(4, 'class', 'form-control', 'name', 'description'), null);
        this._DefaultValueAccessor_29_3 = new import13.Wrapper_DefaultValueAccessor(this.renderer, new import16.ElementRef(this._el_29));
        this._NG_VALUE_ACCESSOR_29_4 = [this._DefaultValueAccessor_29_3.context];
        this._NgModel_29_5 = new import14.Wrapper_NgModel(this._ControlContainer_6_4, null, null, this._NG_VALUE_ACCESSOR_29_4);
        this._NgControl_29_6 = this._NgModel_29_5.context;
        this._NgControlStatus_29_7 = new import12.Wrapper_NgControlStatus(this._NgControl_29_6);
        this._text_30 = this.renderer.createText(this._el_29, '    ', null);
        this._text_31 = this.renderer.createText(this._el_24, '\n    ', null);
        this._text_32 = this.renderer.createText(this._el_6, '\n    ', null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_34 = this.renderer.createText(this._el_33, '\n        ', null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_33, 'label', import3.EMPTY_INLINE_ARRAY, null);
        this._text_36 = this.renderer.createText(this._el_35, 'Price', null);
        this._text_37 = this.renderer.createText(this._el_33, '\n        ', null);
        this._el_38 = import3.createRenderElement(this.renderer, this._el_33, 'input', new import3.InlineArray4(4, 'class', 'form-control', 'name', 'price'), null);
        this._DefaultValueAccessor_38_3 = new import13.Wrapper_DefaultValueAccessor(this.renderer, new import16.ElementRef(this._el_38));
        this._NG_VALUE_ACCESSOR_38_4 = [this._DefaultValueAccessor_38_3.context];
        this._NgModel_38_5 = new import14.Wrapper_NgModel(this._ControlContainer_6_4, null, null, this._NG_VALUE_ACCESSOR_38_4);
        this._NgControl_38_6 = this._NgModel_38_5.context;
        this._NgControlStatus_38_7 = new import12.Wrapper_NgControlStatus(this._NgControl_38_6);
        this._text_39 = this.renderer.createText(this._el_33, '\n    ', null);
        this._text_40 = this.renderer.createText(this._el_6, '\n    ', null);
        this._el_41 = import3.createRenderElement(this.renderer, this._el_6, 'button', new import3.InlineArray4(4, 'class', 'btn btn-primary', 'type', 'submit'), null);
        this._text_42 = this.renderer.createText(this._el_41, '', null);
        this._text_43 = this.renderer.createText(this._el_6, '\n    ', null);
        this._el_44 = import3.createRenderElement(this.renderer, this._el_6, 'button', new import3.InlineArray8(6, 'class', 'btn btn-secondary', 'routerLink', '/admin/main/products', 'type', 'reset'), null);
        this._RouterLink_44_3 = new import15.Wrapper_RouterLink(this.parentView.injectorGet(import9.Router, this.parentIndex), this.parentView.injectorGet(import10.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import17.LocationStrategy, this.parentIndex));
        this._text_45 = this.renderer.createText(this._el_44, '\n        Cancel\n    ', null);
        this._text_46 = this.renderer.createText(this._el_6, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_6, new import3.InlineArray8(6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_6));
        this._NgForm_6_3.subscribe(this, this.eventHandler(this.handleEvent_6), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_13, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_13));
        this._NgModel_13_5.subscribe(this, this.eventHandler(this.handleEvent_13), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_21, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_21));
        this._NgModel_21_5.subscribe(this, this.eventHandler(this.handleEvent_21), true);
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_29, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_29));
        this._NgModel_29_5.subscribe(this, this.eventHandler(this.handleEvent_29), true);
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_38, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_38));
        this._NgModel_38_5.subscribe(this, this.eventHandler(this.handleEvent_38), true);
        var disposable_5 = import3.subscribeToRenderElement(this, this._el_44, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_44));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._text_46
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5
        ]);
        return null;
    };
    View_ProductEditorComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.DefaultValueAccessor) && (13 === requestNodeIndex))) {
            return this._DefaultValueAccessor_13_3.context;
        }
        if (((token === import19.NG_VALUE_ACCESSOR) && (13 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_13_4;
        }
        if (((token === import20.NgModel) && (13 === requestNodeIndex))) {
            return this._NgModel_13_5.context;
        }
        if (((token === import21.NgControl) && (13 === requestNodeIndex))) {
            return this._NgControl_13_6;
        }
        if (((token === import22.NgControlStatus) && (13 === requestNodeIndex))) {
            return this._NgControlStatus_13_7.context;
        }
        if (((token === import18.DefaultValueAccessor) && (21 === requestNodeIndex))) {
            return this._DefaultValueAccessor_21_3.context;
        }
        if (((token === import19.NG_VALUE_ACCESSOR) && (21 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_21_4;
        }
        if (((token === import20.NgModel) && (21 === requestNodeIndex))) {
            return this._NgModel_21_5.context;
        }
        if (((token === import21.NgControl) && (21 === requestNodeIndex))) {
            return this._NgControl_21_6;
        }
        if (((token === import22.NgControlStatus) && (21 === requestNodeIndex))) {
            return this._NgControlStatus_21_7.context;
        }
        if (((token === import18.DefaultValueAccessor) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._DefaultValueAccessor_29_3.context;
        }
        if (((token === import19.NG_VALUE_ACCESSOR) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._NG_VALUE_ACCESSOR_29_4;
        }
        if (((token === import20.NgModel) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._NgModel_29_5.context;
        }
        if (((token === import21.NgControl) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._NgControl_29_6;
        }
        if (((token === import22.NgControlStatus) && ((29 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._NgControlStatus_29_7.context;
        }
        if (((token === import18.DefaultValueAccessor) && (38 === requestNodeIndex))) {
            return this._DefaultValueAccessor_38_3.context;
        }
        if (((token === import19.NG_VALUE_ACCESSOR) && (38 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_38_4;
        }
        if (((token === import20.NgModel) && (38 === requestNodeIndex))) {
            return this._NgModel_38_5.context;
        }
        if (((token === import21.NgControl) && (38 === requestNodeIndex))) {
            return this._NgControl_38_6;
        }
        if (((token === import22.NgControlStatus) && (38 === requestNodeIndex))) {
            return this._NgControlStatus_38_7.context;
        }
        if (((token === import23.RouterLink) && ((44 <= requestNodeIndex) && (requestNodeIndex <= 45)))) {
            return this._RouterLink_44_3.context;
        }
        if (((token === import24.NgForm) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._NgForm_6_3.context;
        }
        if (((token === import25.ControlContainer) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._ControlContainer_6_4;
        }
        if (((token === import22.NgControlStatusGroup) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._NgControlStatusGroup_6_5.context;
        }
        return notFoundResult;
    };
    View_ProductEditorComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NgForm_6_3.ngDoCheck(this, this._el_6, throwOnChange);
        this._NgControlStatusGroup_6_5.ngDoCheck(this, this._el_6, throwOnChange);
        this._DefaultValueAccessor_13_3.ngDoCheck(this, this._el_13, throwOnChange);
        var currVal_13_1_0 = 'name';
        this._NgModel_13_5.check_name(currVal_13_1_0, throwOnChange, false);
        var currVal_13_1_1 = this.context.product.name;
        this._NgModel_13_5.check_model(currVal_13_1_1, throwOnChange, false);
        this._NgModel_13_5.ngDoCheck(this, this._el_13, throwOnChange);
        this._NgControlStatus_13_7.ngDoCheck(this, this._el_13, throwOnChange);
        this._DefaultValueAccessor_21_3.ngDoCheck(this, this._el_21, throwOnChange);
        var currVal_21_1_0 = 'category';
        this._NgModel_21_5.check_name(currVal_21_1_0, throwOnChange, false);
        var currVal_21_1_1 = this.context.product.category;
        this._NgModel_21_5.check_model(currVal_21_1_1, throwOnChange, false);
        this._NgModel_21_5.ngDoCheck(this, this._el_21, throwOnChange);
        this._NgControlStatus_21_7.ngDoCheck(this, this._el_21, throwOnChange);
        this._DefaultValueAccessor_29_3.ngDoCheck(this, this._el_29, throwOnChange);
        var currVal_29_1_0 = 'description';
        this._NgModel_29_5.check_name(currVal_29_1_0, throwOnChange, false);
        var currVal_29_1_1 = this.context.product.description;
        this._NgModel_29_5.check_model(currVal_29_1_1, throwOnChange, false);
        this._NgModel_29_5.ngDoCheck(this, this._el_29, throwOnChange);
        this._NgControlStatus_29_7.ngDoCheck(this, this._el_29, throwOnChange);
        this._DefaultValueAccessor_38_3.ngDoCheck(this, this._el_38, throwOnChange);
        var currVal_38_1_0 = 'price';
        this._NgModel_38_5.check_name(currVal_38_1_0, throwOnChange, false);
        var currVal_38_1_1 = this.context.product.price;
        this._NgModel_38_5.check_model(currVal_38_1_1, throwOnChange, false);
        this._NgModel_38_5.ngDoCheck(this, this._el_38, throwOnChange);
        this._NgControlStatus_38_7.ngDoCheck(this, this._el_38, throwOnChange);
        var currVal_44_0_0 = '/admin/main/products';
        this._RouterLink_44_3.check_routerLink(currVal_44_0_0, throwOnChange, false);
        this._RouterLink_44_3.ngDoCheck(this, this._el_44, throwOnChange);
        var currVal_71 = this.context.isEdit;
        if (import3.checkBinding(throwOnChange, this._expr_71, currVal_71)) {
            this.renderer.setElementClass(this._el_0, 'bg-warning', currVal_71);
            this._expr_71 = currVal_71;
        }
        var currVal_72 = import3.inlineInterpolate(1, '', (this.context.isEdit ? 'Edit' : 'Create'), ' Product');
        if (import3.checkBinding(throwOnChange, this._expr_72, currVal_72)) {
            this.renderer.setText(this._text_3, currVal_72);
            this._expr_72 = currVal_72;
        }
        this._NgControlStatusGroup_6_5.checkHost(this, this, this._el_6, throwOnChange);
        this._NgControlStatus_13_7.checkHost(this, this, this._el_13, throwOnChange);
        this._NgControlStatus_21_7.checkHost(this, this, this._el_21, throwOnChange);
        this._NgControlStatus_29_7.checkHost(this, this, this._el_29, throwOnChange);
        this._NgControlStatus_38_7.checkHost(this, this, this._el_38, throwOnChange);
        var currVal_73 = this.context.isEdit;
        if (import3.checkBinding(throwOnChange, this._expr_73, currVal_73)) {
            this.renderer.setElementClass(this._el_41, 'btn-warning', currVal_73);
            this._expr_73 = currVal_73;
        }
        var currVal_74 = import3.inlineInterpolate(1, '\n        ', (this.context.isEdit ? 'Save' : 'Create'), '\n    ');
        if (import3.checkBinding(throwOnChange, this._expr_74, currVal_74)) {
            this.renderer.setText(this._text_42, currVal_74);
            this._expr_74 = currVal_74;
        }
    };
    View_ProductEditorComponent0.prototype.destroyInternal = function () {
        this._NgModel_13_5.ngOnDestroy();
        this._NgModel_21_5.ngOnDestroy();
        this._NgModel_29_5.ngOnDestroy();
        this._NgModel_38_5.ngOnDestroy();
        this._NgForm_6_3.ngOnDestroy();
    };
    View_ProductEditorComponent0.prototype.handleEvent_6 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_6_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            var pd_sub_0 = (this.context.save(this._NgForm_6_3.context) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ProductEditorComponent0.prototype.handleEvent_13 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_13_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.product.name = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ProductEditorComponent0.prototype.handleEvent_21 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_21_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.product.category = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ProductEditorComponent0.prototype.handleEvent_29 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_29_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.product.description = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ProductEditorComponent0.prototype.handleEvent_38 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_38_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.product.price = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ProductEditorComponent0.prototype.handleEvent_44 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLink_44_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_ProductEditorComponent0;
}(import1.AppView));
