import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { OndemandComponent } from "./ondemand.component";
import { FirstComponent } from "./first.component";
import { SecondComponent } from "./second.component";
import { ModelModule } from "../model/model.module";

const routing = RouterModule.forChild([
    {
        path: "",
        component: OndemandComponent,
        children: [
            {
                path: "",
                children: [
                    { outlet: "primary", path: "", component: FirstComponent },
                    { outlet: "left", path: "", component: SecondComponent },
                    { outlet: "right", path: "", component: SecondComponent }
                ]
            },
            {
                path: "swap",
                children: [
                    { outlet: "primary", path: "", component: SecondComponent },
                    { outlet: "left", path: "", component: FirstComponent },
                    { outlet: "right", path: "", component: FirstComponent }
                ]
            }
        ]
    },
]);

@NgModule({
    imports: [CommonModule, ModelModule, routing],
    declarations: [OndemandComponent, FirstComponent, SecondComponent],
    exports: [OndemandComponent]
})
export class OndemandModule { }