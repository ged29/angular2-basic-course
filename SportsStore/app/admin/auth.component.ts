import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../model/auth.service";

@Component({
    moduleId: module.id,
    templateUrl: "auth.component.html"
})
export class AuthComponent {
    public username: string;
    public password: string;
    public errorMessage: string;

    constructor(
        private router: Router,
        private authService: AuthService) {
        if (this.authService.isAuthenticated) {
            this.router.navigateByUrl("/admin/main");
        }
    }

    authenticate(form: NgForm) {
        if (!form.valid) {
            this.errorMessage = "Form Data Invalid";
            return;
        }
        // perform authentication
        this.authService
            .authenticate(this.username, this.password)
            .subscribe(isAuthenticated => {
                if (isAuthenticated) {
                    this.router.navigateByUrl("/admin/main");
                }

                this.errorMessage = "Authentication failed";
            });
    }
}