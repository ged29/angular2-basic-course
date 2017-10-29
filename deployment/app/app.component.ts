import { Component } from "@angular/core";
// root component that takes responsibility for the top-level content presented to the user
@Component({
    selector: "app",
    template: `<router-outlet></router-outlet>`
})
export class AppComponent { }