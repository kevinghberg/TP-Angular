import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GranjaAboutComponent } from './granja-about/granja-about.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  },

  {
    path: 'productos',
    component: ProductsListComponent
  },

  {
    path: 'about',
    component: GranjaAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {



}
