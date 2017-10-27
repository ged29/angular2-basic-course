import { Injectable } from "@angular/core";
import { Http, Request, RequestMethod, ResponseContentType } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Product } from "./product.model";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import "rxjs/add/operator/map";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {
    baseUrl: string;
    auth_token: string;

    constructor(private http: Http) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    authenticate(userName: string, password: string): Observable<boolean> {
        var authCommand = new Request({
            method: RequestMethod.Post,
            url: this.baseUrl + "login",
            body: { name: userName, password }
        });

        return this.http
            .request(authCommand)
            .map(response => {
                let result = response.json() as IAuthResponse;
                this.auth_token = result.success ? result.token : null;
                return result.success;
            });
    }

    //#region Products
    getProducts(): Observable<Product[]> {
        return this.sendRequest(RequestMethod.Get, "products");
    }

    saveProduct(product: Product): Observable<Product> {
        return this.sendRequest(RequestMethod.Post, "products", product, true);
    }

    updateProduct(product: Product): Observable<Product> {
        return this.sendRequest(RequestMethod.Put, `products/${product.id}`, product, true);
    }

    deleteProduct(id: number): Observable<Product> {
        return this.sendRequest(RequestMethod.Delete, `products/${id}`, null, true);
    }
    //#endregion

    //#region Order
    getOrders(): Observable<Order[]> {
        return this.sendRequest(RequestMethod.Get, "orders", null, true);
    }

    saveOrder(order: Order): Observable<Order> {
        return this.sendRequest(RequestMethod.Post, "orders", order);
    }

    updateOrder(order: Order): Observable<Order> {
        return this.sendRequest(RequestMethod.Put, `orders/${order.id}`, order, true);
    }

    deleteOrder(id: number): Observable<Order> {
        return this.sendRequest(RequestMethod.Delete, `orders/${id}`, null, true);
    }
    //#endregion

    private sendRequest<T extends Product | Product[] | Order | Order[]>(
        method: RequestMethod,
        path: string,
        body?: T,
        isAuthRequired: boolean = false): Observable<T> {

        var reqCommand = new Request({
            method,
            url: this.baseUrl + path,
            body
        });

        if (isAuthRequired && this.auth_token !== undefined) {
            // set the authorization header for this command
            reqCommand.headers.set("authorization", `Bearer<${this.auth_token}>`);
        }

        return this.http
            .request(reqCommand)
            .map(response => response.json());
    }
}

interface IAuthResponse {
    success: boolean,
    token?: string
}