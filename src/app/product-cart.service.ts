import { Injectable } from '@angular/core';
import { Product } from './products-list/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  cartList:Product[]=[];

  
  
  constructor( ) { }

  
 
  
  addToCart(products: Product) {
  
  let item:Product=this.cartList.find((v1)=>v1.name==products.name);

    if(!item){

      this.cartList.push({ ... products});

    }else{
      item.quantityInput+= products.quantityInput;
    }
   console.log(this.cartList);
  }

}

  
 
