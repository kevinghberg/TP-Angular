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
      auxstock: 0,
      soon: false,
      quantityInput: 0,
    },
    {
      image: "assets/img/maple-huevo.jpg",
      name: "Maple de Huevos",
      price: 250,
      stock: 15,
      auxstock: 0,
      soon: false,
      quantityInput: 0,
    },
    {
      image: "assets/img/alimento.jpg",
      name: "Alimento Balanceado 40kg",
      price: 1400,
      stock: 0,
      auxstock: 0,
      soon: false,
      quantityInput: 0,
    },
    {
      image: "assets/img/comedero.jpg",
      name: "Comedero",
      price: 400, 
      stock: 5,
      auxstock: 0,
      soon: true,
      quantityInput: 0,
    }
  ]

  constructor() {
    this.products.forEach((product=> { product.auxstock = product.stock; }));
  }

  ngOnInit(): void {



  }

}
