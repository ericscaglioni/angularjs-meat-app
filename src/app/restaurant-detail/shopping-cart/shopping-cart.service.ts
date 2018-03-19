import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService {
    items: CartItem[] = []

    clear() {
        this.items = []
    }

    addItem(item: MenuItem){
        let itemAlreadyAdded = this.items.find(mItem => mItem.menuItem.id == item.id)
        if(itemAlreadyAdded){
            itemAlreadyAdded.quantity++
        }else {
            this.items.push(new CartItem(item))
        }
    }

    removeItem(item: CartItem){
        this.items.splice(this.items.indexOf(item), 1)
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
}