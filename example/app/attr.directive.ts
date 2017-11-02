import { Directive, ElementRef, Attribute, Input } from "@angular/core";

@Directive({
    selector: "[pa-attr]"
})
export class PaAttrDirective {
    @Input("pa-attr")
    bgClass: string;

    constructor(private elementRef: ElementRef) { }

    ngOnInit() {
        this.elementRef.nativeElement.classList.add(this.bgClass || "bg-success");
    }
}