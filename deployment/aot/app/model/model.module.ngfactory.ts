/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../app/model/model.module';
import * as import2 from '@angular/http/src/http_module';
import * as import3 from '@angular/http/src/backends/browser_xhr';
import * as import4 from '@angular/http/src/base_response_options';
import * as import5 from '@angular/http/src/backends/xhr_backend';
import * as import6 from '@angular/http/src/base_request_options';
import * as import7 from '../../../app/model/rest.datasource';
import * as import8 from '../../../app/model/product.repository';
import * as import9 from '../../../app/model/cart.model';
import * as import10 from '../../../app/model/order.model';
import * as import11 from '../../../app/model/order.repository';
import * as import12 from '../../../app/model/auth.service';
import * as import13 from '@angular/core/src/di/injector';
import * as import14 from '@angular/http/src/interfaces';
import * as import15 from '@angular/http/src/http';
class ModelModuleInjector extends import0.NgModuleInjector<import1.ModelModule> {
  _HttpModule_0:import2.HttpModule;
  _ModelModule_1:import1.ModelModule;
  __BrowserXhr_2:import3.BrowserXhr;
  __ResponseOptions_3:import4.BaseResponseOptions;
  __XSRFStrategy_4:any;
  __XHRBackend_5:import5.XHRBackend;
  __RequestOptions_6:import6.BaseRequestOptions;
  __Http_7:any;
  __RestDataSource_8:import7.RestDataSource;
  __ProductRepository_9:import8.ProductRepository;
  __Cart_10:import9.Cart;
  __Order_11:import10.Order;
  __OrderRepository_12:import11.OrderRepository;
  __AuthService_13:import12.AuthService;
  constructor(parent:import13.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _BrowserXhr_2():import3.BrowserXhr {
    if ((this.__BrowserXhr_2 == null)) { (this.__BrowserXhr_2 = new import3.BrowserXhr()); }
    return this.__BrowserXhr_2;
  }
  get _ResponseOptions_3():import4.BaseResponseOptions {
    if ((this.__ResponseOptions_3 == null)) { (this.__ResponseOptions_3 = new import4.BaseResponseOptions()); }
    return this.__ResponseOptions_3;
  }
  get _XSRFStrategy_4():any {
    if ((this.__XSRFStrategy_4 == null)) { (this.__XSRFStrategy_4 = import2._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_4;
  }
  get _XHRBackend_5():import5.XHRBackend {
    if ((this.__XHRBackend_5 == null)) { (this.__XHRBackend_5 = new import5.XHRBackend(this._BrowserXhr_2,this._ResponseOptions_3,this._XSRFStrategy_4)); }
    return this.__XHRBackend_5;
  }
  get _RequestOptions_6():import6.BaseRequestOptions {
    if ((this.__RequestOptions_6 == null)) { (this.__RequestOptions_6 = new import6.BaseRequestOptions()); }
    return this.__RequestOptions_6;
  }
  get _Http_7():any {
    if ((this.__Http_7 == null)) { (this.__Http_7 = import2.httpFactory(this._XHRBackend_5,this._RequestOptions_6)); }
    return this.__Http_7;
  }
  get _RestDataSource_8():import7.RestDataSource {
    if ((this.__RestDataSource_8 == null)) { (this.__RestDataSource_8 = new import7.RestDataSource(this._Http_7)); }
    return this.__RestDataSource_8;
  }
  get _ProductRepository_9():import8.ProductRepository {
    if ((this.__ProductRepository_9 == null)) { (this.__ProductRepository_9 = new import8.ProductRepository(this._RestDataSource_8)); }
    return this.__ProductRepository_9;
  }
  get _Cart_10():import9.Cart {
    if ((this.__Cart_10 == null)) { (this.__Cart_10 = new import9.Cart()); }
    return this.__Cart_10;
  }
  get _Order_11():import10.Order {
    if ((this.__Order_11 == null)) { (this.__Order_11 = new import10.Order(this._Cart_10)); }
    return this.__Order_11;
  }
  get _OrderRepository_12():import11.OrderRepository {
    if ((this.__OrderRepository_12 == null)) { (this.__OrderRepository_12 = new import11.OrderRepository(this._RestDataSource_8)); }
    return this.__OrderRepository_12;
  }
  get _AuthService_13():import12.AuthService {
    if ((this.__AuthService_13 == null)) { (this.__AuthService_13 = new import12.AuthService(this._RestDataSource_8)); }
    return this.__AuthService_13;
  }
  createInternal():import1.ModelModule {
    this._HttpModule_0 = new import2.HttpModule();
    this._ModelModule_1 = new import1.ModelModule();
    return this._ModelModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.HttpModule)) { return this._HttpModule_0; }
    if ((token === import1.ModelModule)) { return this._ModelModule_1; }
    if ((token === import3.BrowserXhr)) { return this._BrowserXhr_2; }
    if ((token === import4.ResponseOptions)) { return this._ResponseOptions_3; }
    if ((token === import14.XSRFStrategy)) { return this._XSRFStrategy_4; }
    if ((token === import5.XHRBackend)) { return this._XHRBackend_5; }
    if ((token === import6.RequestOptions)) { return this._RequestOptions_6; }
    if ((token === import15.Http)) { return this._Http_7; }
    if ((token === import7.RestDataSource)) { return this._RestDataSource_8; }
    if ((token === import8.ProductRepository)) { return this._ProductRepository_9; }
    if ((token === import9.Cart)) { return this._Cart_10; }
    if ((token === import10.Order)) { return this._Order_11; }
    if ((token === import11.OrderRepository)) { return this._OrderRepository_12; }
    if ((token === import12.AuthService)) { return this._AuthService_13; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const ModelModuleNgFactory:import0.NgModuleFactory<import1.ModelModule> = new import0.NgModuleFactory(ModelModuleInjector,import1.ModelModule);