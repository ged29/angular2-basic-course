import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { TableComponent } from "./table.component";
import { FormComponent } from "./form.component";
import { SHARED_STATE, SharedState, MODES } from "./sharedState.model";
import { Subject } from "rxjs/Subject";
import { StatePipe } from "./state.pipe";
import { Model } from "../model/repository.model";
import { MessageService } from "../messages/message.service";
import { Message } from "../messages/message.model";

@NgModule({
    imports: [BrowserModule, FormsModule, ModelModule],
    declarations: [TableComponent, FormComponent, StatePipe],
    exports: [TableComponent, FormComponent],
    providers: [{
        provide: SHARED_STATE,
        deps: [MessageService, Model],
        useFactory: (messageService: MessageService, model: Model) => {
            let subject = new Subject<SharedState>();
            
            subject.subscribe(state => {
                let text = MODES[state.mode] + (state.id != undefined ? ` ${model.getProduct(state.id).name}` : "");
                messageService.reportMessage(new Message(text));
            });

            return subject;
        }
    }]
})
export class CoreModule { }
