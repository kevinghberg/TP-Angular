import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [
    {
      image: "assets/img/gallina.jpg",
      name: "Gallina Ponedora",
      price: 160,
      stock: 50,
      soon: false,
      quantity: 0,
    },
    {
      image: "assets/img/gallina.jpg",
      name: "Maple de Huevos",
      price: 250,
      stock: 15,
      soon: false,
      quantity: 0,
    },
    {
      image: "assets/img/gallina.jpg",
      name: "Alimento Balanceado 40kg",
      price: 1400,
      stock: 0,
      soon: false,
      quantity: 0,
    },
    {
      image: "assets/img/gallina.jpg",
      name: "Comedero",
      price: 400,
      stock: 5,
      soon: true,
      quantity: 0,
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  downQuantity(products: Product): void {

    if(products.quantity >0)

    products.quantity--;

  }

  upQuantity(products: Product): void {

    if(products.quantity < products.stock && products.soon!=true)
      
    products.quantity++;

  }

  onChangeQuantity(event , products: Product):void{

    console.log(event.target);

  }

}
