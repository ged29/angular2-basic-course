// import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
// import { AppModule } from "./app.module";
// creates an instance of an `@NgModule` for a given platform using the given runtime compiler.
// platformBrowserDynamic().bootstrapModule(AppModule);

///<reference path="../typings/globals/node/index.d.ts"/>
///<reference path="../typings/globals/core-js/index.d.ts"/>

import { enableProdMode } from "@angular/core";
import { platformBrowser } from "@angular/platform-browser";
import { AppModuleNgFactory } from "../aot/app/app.module.ngfactory";

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory); 
// Using the bootstrapModuleFactory method tells Angular that it is dealing with compiled files