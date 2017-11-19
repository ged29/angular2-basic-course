import {
    Directive, Input, EventEmitter, SimpleChange,
    ContentChild, ContentChildren, QueryList
} from "@angular/core";
import { PaCellBgColor } from "./cellBgColor.directive";

@Directive({
    selector: "table"
})
export class PaCellBgColorSwitcher {

    @Input()
    isTdBgColorDark: boolean;

    // @ContentChild(PaCellBgColor)
    // contentChild: PaCellBgColor;

    @ContentChildren(PaCellBgColor)
    contentChildren: QueryList<PaCellBgColor>;

    ngOnChanges(changes: { [propid: string]: SimpleChange }) {
        this.updateContentChildren(changes["isTdBgColorDark"].currentValue);
    }

    ngAfterContentInit() {
        // there is some change in the set of directives
        this.contentChildren.changes.subscribe(() => {
            setTimeout(() => this.updateContentChildren(this.isTdBgColorDark), 0);
        });
    }

    updateContentChildren(isDark) {
        if (isDark !== undefined && this.contentChildren !== undefined) {
            this.contentChildren.forEach((child, index) => child.setColor(index % 2 ? isDark : !isDark));
        }
    }
}