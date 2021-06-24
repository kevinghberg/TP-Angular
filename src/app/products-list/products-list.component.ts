import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = {
    producto:"Gallina Ponedoras",
    precio:"160$",
    stock:5,
    image: "assets/img/gallina.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
