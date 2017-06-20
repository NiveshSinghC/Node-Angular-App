import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  cartItems: Array<Object>;
  constructor() {
    this.cartItems = [];
   }

  addToCart(item) {
    
    this.cartItems.push(item);
    console.log(this.cartItems);
  }

}

