// import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
// import { AppModule } from "./app.module";
// creates an instance of an `@NgModule` for a given platform using the given runtime compiler.
// platformBrowserDynamic().bootstrapModule(AppModule);
import { enableProdMode } from "@angular/core";
import { platformBrowser } from "@angular/platform-browser";
import { AppModuleNgFactory } from "../aot/app/app.module.ngfactory";
enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
