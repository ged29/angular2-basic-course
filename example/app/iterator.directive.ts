import { Directive, ViewContainerRef, TemplateRef, Input, SimpleChange } from "@angular/core";

@Directive({
    selector: "[paForOf]"
})
export class PaIteratorDirective {
    constructor(
        private viewContainer: ViewContainerRef,
        private template: TemplateRef<Object>) { }

    @Input("paForOf") dataSource: any[];

    ngOnInit() {
        this.viewContainer.clear();
        this.dataSource.forEach((item: any, index: number) =>
            this.viewContainer.createEmbeddedView(this.template, new PaIteratorContext(item), index));
    }
}

class PaIteratorContext {
    constructor(public $implicit: any) { }
}