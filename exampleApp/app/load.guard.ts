import { Injectable } from "@angular/core";
import { Route, Router, CanLoad } from "@angular/router";
import { MessageService } from "./messages/message.service";
import { Message } from "./messages/message.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class LoadGuard implements CanLoad {
    private loaded: boolean = false;

    constructor(
        private messages: MessageService,
        private router: Router) { }

    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        return this.loaded || new Promise<boolean>((resolve, reject) => {
            this.messages.reportMessage(
                new Message("Do you want to load the module?", false, [
                    ["Yes", () => {
                        this.loaded = true;
                        resolve(true);
                    }],
                    ["No", () => {
                        this.router.navigateByUrl(this.router.url);
                        resolve(false);
                    }]
                ]));
        });
    }
}