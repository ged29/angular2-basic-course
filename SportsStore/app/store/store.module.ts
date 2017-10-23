import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cartSummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";

@NgModule({
    // depends on the model module as well as BrowserModule and FormsModule, which contain the
    // standard Angular features for web applications and working with HTML form elements
    imports: [BrowserModule, FormsModule, ModelModule],
    // to tell Angular about the StoreComponent class
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
    // to tell Angular what can be also used in other parts of the application
    exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})
export class StoreModule { }