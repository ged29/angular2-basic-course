import { Component } from "@angular/core";
import { Router, NavigationEnd, NavigationCancel } from "@angular/router";
import { MessageService } from "./message.service";
import { Message } from "./message.model";
import "rxjs/add/operator/filter";

@Component({
    selector: "paMessages",
    moduleId: module.id,
    templateUrl: "message.component.html",
})
export class MessageComponent {
    lastMessage: Message;

    constructor(messageService: MessageService, router: Router) {
        messageService.messages
            .subscribe(msg => this.lastMessage = msg);

        router.events
            .filter(evt => evt instanceof NavigationEnd || evt instanceof NavigationCancel)
            .subscribe(evt => this.lastMessage = null);
    }
}