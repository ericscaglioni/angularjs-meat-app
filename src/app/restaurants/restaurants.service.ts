import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { MEAT_API } from "../app.api";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ErrorHandler } from "../app.error-handler";
import { MenuItem } from "../restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantsService {
    constructor(private http : HttpClient) {}

    getRestaurants(searchTerm?: string): Observable<Restaurant[]> {
        let params: HttpParams = undefined
        if(searchTerm){
            params = new HttpParams().set('q', searchTerm)
        }
      return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {params: params})
    }

    getRestaurantById(id: string) : Observable<Restaurant> {
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
    }

    getReviewsByRestaurantId(id: string) : Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    }

    getMenuByRestaurantId(id: string) : Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
    }
}