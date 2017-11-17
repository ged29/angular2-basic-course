import { Directive, Input, Output, HostBinding, HostListener, EventEmitter, SimpleChange } from "@angular/core";

@Directive({
    selector: "input[paModel]",
    exportAs: "paModel"
})
export class PaModel {

    direction: string = "None";

    @Input("paModel") modelProperty: string;
    @HostBinding("value") fieldValue: string = "";

    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        let change = changes["modelProperty"];
        if (this.fieldValue !== change.currentValue) {
            this.fieldValue = change.currentValue || "";
            this.direction = "Model";
        }
    }

    @Output("paModelChange") update = new EventEmitter<string>();

    @HostListener("input", ["$event.target.value"])
    updateValue(newValue: string) {
        this.fieldValue = newValue;
        this.update.emit(newValue);
        this.direction = "Element";
    }
}