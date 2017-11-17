import { Directive, Input, Output, HostBinding, HostListener, EventEmitter } from "@angular/core";
import { Product } from "./product.model";

@Directive({
    selector: ".pa-enhance-attr"
})
export class PaEnhanceDirective {

    @Input("pa-enh-class")
    @HostBinding("class")
    bgColor: string;

    @Input("pa-enh-product")
    product: Product;

    @Output("pa-enh-productCategory")
    click = new EventEmitter<string>()

    @HostListener("click")
    triggerCustomEvent() {
        if (this.product) {
            this.click.emit(this.product.category);
        }
    } 
}