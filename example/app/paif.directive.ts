import { Directive, SimpleChange, ViewContainerRef, TemplateRef, Input } from "@angular/core";

@Directive({
    selector: "[paIf]"
})
export class PaStructuredDirective {
    // ViewContainerRef represents the place in the HTML document occupied by the template element
    // TemplateRef represents the template element’s contents
    constructor(
        private viewContainer: ViewContainerRef,
        private template: TemplateRef<Object>) { }

    @Input("paIf") expressionResult: boolean;

    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        let change = changes["expressionResult"];

        if (!change.isFirstChange() && change.currentValue === false) {
            this.viewContainer.clear();
        }
        else if (change.currentValue === true) {
            this.viewContainer.createEmbeddedView(this.template);
        }

        this.viewContainer.element
    }

}