import { Injectable } from "@angular/core";
import { Message } from "./message.model";
import { Subject } from "rxjs/Subject";

@Injectable()
export class MessageService {
    private subject = new Subject<Message>();

    get messages(): Subject<Message> {
        return this.subject;
    }

    reportMessage(msg: Message) {
        this.subject.next(msg);
    }
}