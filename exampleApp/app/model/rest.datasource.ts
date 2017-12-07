import { OpaqueToken, Injectable, Inject } from "@angular/core";
import { Http, RequestMethod, Request, Response, Jsonp, Headers } from "@angular/http";
import { Product } from "./product.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import "rxjs/add/operator/delay";

export const REST_URL = new OpaqueToken("rest_url");

@Injectable()
export class RestDataSource {
    constructor(
        private http: Http,
        private jsonp: Jsonp,
        @Inject(REST_URL) private url: string) {
    }

    getProducts(from?: string): Observable<Product[]> {    
        //return this.jsonp.get(this.url + "?callback=JSONP_CALLBACK").map(response => response.json());
        return this.sendRequest<Product[]>(RequestMethod.Get, this.url);
    }

    saveProduct(product: Product): Observable<Product> {
        return this.sendRequest<Product>(RequestMethod.Post, this.url, product);
    }

    updateProduct(product: Product): Observable<Product> {
        return this.sendRequest<Product>(RequestMethod.Put, `${this.url}/${product.id}`, product);
    }

    deleteProduct(id: number): Observable<Product> {
        return this.sendRequest<Product>(RequestMethod.Delete, `${this.url}/${id}`);
    }

    private sendRequest<T>(method: RequestMethod, url: string, body?: Product): Observable<T> {
        let headers = new Headers();
        headers.set("Access-Key", "<secret>");
        headers.set("Application-Names", ["exampleApp", "proAngular"]);

        return this.http
            .request(new Request({
                method,
                url,
                body,
                headers
            }))
            .delay(5000)
            .map(response => response.json() as T)
            .catch((error: Response) => Observable.throw(`Network Error: ${error.statusText} (${error.status})`));
    }
}