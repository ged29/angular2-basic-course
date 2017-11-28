import { Directive, OpaqueToken, Inject, HostBinding, Host, Optional, SkipSelf } from "@angular/core";
export const VALUE_SERVICE = new OpaqueToken("value_service");

@Directive({
    selector: "[paDisplayValue]"
})
export class PaDisplayValueDirective {
    constructor( @Inject(VALUE_SERVICE) @SkipSelf() valueOfService: string) {
        this.elementContent = valueOfService || "No Value";
    }

    @HostBinding("textContent")
    elementContent: string;
}