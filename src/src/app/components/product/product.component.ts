import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../services/backend.service';
import {CartService} from '../../services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],

})
export class ProductComponent implements OnInit {
  data: Object;
  item: String;
  quantity: any = 1;


  constructor(
    private Routes: ActivatedRoute,
    private BackendService: BackendService,
    private cart: CartService

  ) {
      this.item = Routes.snapshot.params['id'];
   }

  ngOnInit() {

    console.log(this.item);
    this.BackendService.getitem(this.item).subscribe(data => {
     this.data = data.product;
    });

  }

  addToCart(item) {
    this.cart.addToCart(item);
  }

  increase(){
    this.quantity = this.quantity + 1;
  }
  decrease(){
    if(this.quantity-1!= 0){
      this.quantity = this.quantity - 1; 
    }
     
  }
}
