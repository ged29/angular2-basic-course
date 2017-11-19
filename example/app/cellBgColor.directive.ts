import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: "td"
})
export class PaCellBgColor {

    @HostBinding("class")
    bgClass: string = "";

    setColor(isDark: boolean) {
        this.bgClass = isDark ? "bg-inverse" : "";
    }
}