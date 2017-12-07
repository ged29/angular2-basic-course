import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Model } from "./repository.model"
import { RestDataSource } from "./rest.datasource";
import { Product } from "./product.model";
import { MessageService } from "../messages/message.service";
import { Message } from "../messages/message.model";

@Injectable()
export class ModelResolver implements Resolve<Observable<Product[]>>{
    constructor(
        private model: Model,
        private dataSource: RestDataSource,
        private messageService: MessageService) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<Product[]> {
        if (this.model.getProducts().length === 0) {
            this.messageService.reportMessage(new Message("Loading data..."))
            return this.dataSource.getProducts();
        }
        return null;
    }
}
