import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { TableComponent } from "./table.component";
import { FormComponent } from "./form.component";
import { Subject } from "rxjs/Subject";
import { StatePipe } from "./state.pipe";
import { Model } from "../model/repository.model";
import { MessageService } from "../messages/message.service";
import { Message } from "../messages/message.model";
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from "./notFound.component";
import { CategoryCountComponent } from "./categoryCount.component";
import { ProductCountComponent } from "./productCount.component";

@NgModule({
    imports: [BrowserModule, FormsModule, ModelModule, RouterModule],
    declarations: [TableComponent, FormComponent, StatePipe,
        ProductCountComponent, CategoryCountComponent, NotFoundComponent],
    exports: [TableComponent, FormComponent]
})
export class CoreModule { }
