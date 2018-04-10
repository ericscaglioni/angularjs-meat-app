import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";
import { Injectable } from "@angular/core";
import { NotificationService } from "../../shared/messages/notification.service";

@Injectable()
export class ShoppingCartService {
    items: CartItem[] = []

    clear() {
        this.items = []
    }

    constructor(private notificationService: NotificationService){}

    addItem(item: MenuItem){
        let itemAlreadyAdded = this.items.find(mItem => mItem.menuItem.id == item.id)
        if(itemAlreadyAdded){
            this.increaseQty(itemAlreadyAdded)
        }else {
            this.items.push(new CartItem(item))
        }
        this.notificationService.notify(`Você adicionou o item ${item.name}`)
    }

    removeItem(item: CartItem){
        this.items.splice(this.items.indexOf(item), 1)

        this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`)
    }

    total() : number {
        let total = 0
        for(let cartItem of this.items){
            total += cartItem.value()
        }
        return total
    }

    getItems(): CartItem[] {
        return this.items
    }

    increaseQty(item: CartItem) {
        item.quantity++
    }

    decreaseQty(item: CartItem){
        item.quantity--
        if(item.quantity === 0){
            this.removeItem(item)
        }
    }
}