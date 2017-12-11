import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate } from "@angular/router";
import { MessageService } from "./messages/message.service";
import { Message } from "./messages/message.model";
import { FormComponent } from "./core/form.component";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class UnsavedGuard implements CanDeactivate<FormComponent>  {
    constructor(
        private messageService: MessageService,
        private router: Router) {
    }

    canDeactivate(
        component: FormComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (!component.editing) {
            return true;
        }

        if (["name", "category", "price"].some(prop => component.product[prop] !== component.originalProduct[prop])) {
            let subject = new Subject<boolean>();
            this.messageService.reportMessage(new Message("Discard Changes?", true, [
                ["Yes", () => { subject.next(true); subject.complete(); }],
                ["No", () => { subject.next(false); subject.complete(); }]
            ]));
            return subject as Observable<boolean>;
        }
        return true;
    }
}
