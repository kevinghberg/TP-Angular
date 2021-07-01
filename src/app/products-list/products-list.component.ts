import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
import { Product } from './Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [
    
  ];

  

  constructor( private productsCartService:ProductCartService, 
               private productDataService: ProductDataService)  {

                
    
  
  }

  ngOnInit(): void {

    this.productDataService.getAll()
    .subscribe(products => this.products= products);


  }

  addToCart(products:Product): void{

    
  if(products.quantityInput>0){
    
    this.productsCartService.addToCart(products);

    products.stock -= products.quantityInput;

    products.quantityInput=0;

  }

}
}