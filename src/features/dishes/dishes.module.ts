import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: DishesListComponent },
  { path: ':id', component: DishDetailComponent }
];

@NgModule({
  declarations: [DishesListComponent, DishDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  
})
export class DishesModule { }
