import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingkartComponent } from './shoppingkart/shoppingkart.component';

const routes: Routes = [
  {
    path:'',
    component:ShoppingkartComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
