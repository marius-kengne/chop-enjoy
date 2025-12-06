/*import { Routes } from '@angular/router';

export const routes: Routes = [

];
*/

import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('../features/home/home.module').then(m => m.HomeModule)
  },
  { 
    path: 'auth', 
    loadChildren: () => import('../features/auth/auth.module').then(m => m.AuthModule)
  },
  { 
    path: 'dishes', 
    loadChildren: () => import('../features/dishes/dishes.module').then(m => m.DishesModule)
  },
  
  { 
    path: 'order', 
    loadChildren: () => import('../features/order/order.module').then(m => m.OrderModule)
  },
  { 
    path: 'cook', 
    loadChildren: () => import('../features/cook-dashboard/cook-dashboard.module').then(m => m.CookDashboardModule)
  },
  
  { path: '**', redirectTo: '' }
];