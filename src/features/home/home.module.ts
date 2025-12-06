import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    HomeComponent,
    NavbarComponent,
    RouterModule.forChild(routes),
    RouterLink
  ]
})
export class HomeModule { }
