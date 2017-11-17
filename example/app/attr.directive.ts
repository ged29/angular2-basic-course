import {
    Directive, ElementRef, Attribute, Input, Output, SimpleChange, EventEmitter,
    HostListener, HostBinding
} from "@angular/core";
import { Product } from "./product.model";

@Directive({
    selector: "[pa-attr]"
})
export class PaAttrDirective {
    @Input("pa-attr") bgClass: string;
    @Input("pa-product") product: Product;
    @Output("pa-productCategory") click = new EventEmitter<string>();

    constructor(private elementRef: ElementRef) {
        elementRef.nativeElement.addEventListener("click", evt => {
            if (this.product) {
                this.click.emit(this.product.category);
            }
        });
    }

    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        let change = changes["bgClass"],
            classList = (this.elementRef.nativeElement as HTMLElement).classList;

        if (!change.isFirstChange() && classList.contains(change.previousValue)) {
            classList.remove(change.previousValue);
        }

        if (!classList.contains(change.currentValue)) {
            classList.add(change.currentValue);
        }
    }
}