import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: UserOrdersComponent,
    data: { showHeader: true, showFooter: true, headerType: 'alternative' }
  }
];

@NgModule({
  declarations: [
    UserProfileComponent,
    UserOrdersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AccountModule { }
