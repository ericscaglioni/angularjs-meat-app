import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { InputComponent } from './input/input.component';
import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { OrderService } from '../order/order.service';

@NgModule({
  imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule],
  exports: [InputComponent, 
            RadioComponent, 
            RatingComponent,
            CommonModule, 
            FormsModule, 
            ReactiveFormsModule],
  declarations: [InputComponent,
                 RadioComponent,
                 RatingComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ShoppingCartService,
        RestaurantsService,
        OrderService
      ]
    }
  }
 }
