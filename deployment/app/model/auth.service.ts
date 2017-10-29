import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { RestDataSource } from "./rest.datasource";
import "rxjs/add/operator/map";

@Injectable()
export class AuthService {
    constructor(private dataSource: RestDataSource) { }

    authenticate(userName: string, password: string): Observable<boolean> {
        return this.dataSource.authenticate(userName, password);
    }

    get isAuthenticated(): boolean {
        return this.dataSource.auth_token !== undefined;
    }

    clear() {
        this.dataSource.auth_token = undefined;
    }
}