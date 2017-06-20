import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cat: any;
  cartItemNo: number;
  constructor(
     private BackendService: BackendService,
     private cart: CartService
  ) { }

  ngOnInit() {
    this.BackendService.getcat().subscribe(data => {
      this.cat = data.category;
    this.cartItemNo = this.cart.cartItems.length;
    });

  }

}
