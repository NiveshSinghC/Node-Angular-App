import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itemInCart: Array<any>;
  total: Number;

  constructor(
    private cart: CartService
  ) { }

  ngOnInit() {
    this.getCartItems();
    this.totalPrice();
  }

  getCartItems(){
    this.itemInCart = this.cart.cartItems;
  }

  totalPrice() {
    total = 0;
    for(let i of this.itemInCart){
      var total = total + i.saleprice * i.quantity;
    }
    return total;
  }

}
