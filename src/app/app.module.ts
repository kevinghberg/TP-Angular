import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CartComponent } from './cart/cart.component';

import { FormsModule } from '@angular/forms';
import { GranjaAboutComponent } from './granja-about/granja-about.component';
import { GranjaProductsComponent } from './granja-products/granja-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    CartComponent,
    GranjaAboutComponent,
    GranjaProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
