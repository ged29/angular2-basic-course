import { ApplicationRef, Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "app",
    templateUrl: "template.html",
    styleUrls: ["productComponent.css"],
    //styles: ["/deep/ div { border: 2px black solid; font-style:italic }"]
})
export class ProductComponent {
    constructor(appRef: ApplicationRef) {
        (window as any).appRef = appRef;
    }
}