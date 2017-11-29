import { OpaqueToken, Injectable, Inject } from "@angular/core";
import { Http } from "@angular/http";
import { Product } from "./product.model";
import { Observable } from "rxjs/Observable";

export const REST_URL = new OpaqueToken("rest_url");

@Injectable()
export class RestDataSource {
    constructor(
        private http: Http,
        @Inject(REST_URL) private url: string) {
    }

    getData(): Observable<Product[]> {
        return this.http.get(this.url).map(respose => respose.json());
    }
}