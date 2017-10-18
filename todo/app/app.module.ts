import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";

@NgModule({
    // specifies a list of modules whose exported directives/pipes should be available to templates in this module.
    imports: [BrowserModule, FormsModule],
    // specifies a list of directives/pipes that belong to this module.
    declarations: [AppComponent],
    // defines the components that should be bootstrapped when this module is bootstrapped
    bootstrap: [AppComponent]
})
export class AppModule {
}