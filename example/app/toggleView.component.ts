import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "paToggleView",
    templateUrl: "toggleView.component.html"
})
export class ToggleViewComponent {
    showContent: boolean = true;
}