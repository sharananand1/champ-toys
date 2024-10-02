import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllToysComponent} from './all-toys/all-toys.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'all-toys',
    component: AllToysComponent,
    data: {showHeader: true, showFooter: true, headerType: 'default'}
  },
  {
    path: 'details/:id',
    component: ProductDetailsComponent,
    data: {showHeader: true, showFooter: true, headerType: 'default'}
  }
];


@NgModule({
  declarations: [
    AllToysComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CollectionModule {
}
