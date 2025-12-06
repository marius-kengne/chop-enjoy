import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { MyDishesComponent } from './my-dishes/my-dishes.component';
//import { AddDishComponent } from './add-dish/add-dish.component';
//import { OrdersComponent } from './orders/orders.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  //{ path: 'dishes', component: MyDishesComponent },
  //{ path: 'add-dish', component: AddDishComponent },
  //{ path: 'orders', component: OrdersComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CookDashboardModule { }
