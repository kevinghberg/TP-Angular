import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../products-list/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {



  cartList$: Observable<Product[]>;



  constructor(private productCartService:ProductCartService) {


    this.cartList$=this.productCartService.cartList.asObservable();

  

   }

  ngOnInit(): void {
  }

}

