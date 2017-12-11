import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { MessageService } from "./messages/message.service";
import { Message } from "./messages/message.model";

@Injectable()
export class TermsGuard {

    constructor(
        private messageService: MessageService,
        private router: Router) {
    }

    canActivate(
        activatedRouteSnapshot: ActivatedRouteSnapshot,
        routerStateSnapshot: RouterStateSnapshot): Promise<boolean> | boolean {
        let params = activatedRouteSnapshot.params;
        if (!params.hasOwnProperty("mode") || params["mode"] !== "create") {
            return true;
        }

        return new Promise<boolean>((resolve, reject) => {
            let responses: [[string, (string) => void]] = [
                ["Yes", () => resolve(true)],
                ["No", () => {
                    this.router.navigateByUrl(this.router.url);
                    resolve(false);
                }],
            ];

            this.messageService.reportMessage(new Message("Do you accept the terms & conditions?", false, responses));
        });
    }

    canActivateChild(
        activatedRouteSnapshot: ActivatedRouteSnapshot,
        routerStateSnapshot: RouterStateSnapshot): Promise<boolean> | boolean {
        if (!activatedRouteSnapshot.params.hasOwnProperty("category")) {
            return true;
        }

        return new Promise<boolean>((resolve, reject) => {
            let responses: [[string, (string) => void]] = [
                ["Yes", () => resolve(true)],
                ["No", () => {
                    this.router.navigateByUrl(routerStateSnapshot.url.replace("categories", "products"));
                    resolve(false);
                }],
            ];

            this.messageService.reportMessage(new Message("Do you want to see the categories component?", false, responses));
        });
    }
}