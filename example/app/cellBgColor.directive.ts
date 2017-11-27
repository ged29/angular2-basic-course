import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: "td[paApplyColor]"
})
export class PaCellBgColor {

    @HostBinding("class")
    bgClass: string = "";

    setColor(isDark: boolean) {
        this.bgClass = isDark ? "bg-inverse" : "";
    }
}