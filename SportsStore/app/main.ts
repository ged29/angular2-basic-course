import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";
// creates an instance of an `@NgModule` for a given platform using the given runtime compiler.
platformBrowserDynamic().bootstrapModule(AppModule);