import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../../app/core/services/order.service';
import { DishService } from '../../../app/core/services/dish.service';
import { Order } from '../../../app/core/models/order.model';
import { Dish } from '../../../app/core/models/dish.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [
    CommonModule
    ]
})
export class DashboardComponent implements OnInit {
  orders: Order[] = [];
  dishes: Dish[] = [];
  stats = {
    revenue: 1245,
    ordersCount: 87,
    rating: 4.8,
    activeDishes: 12
  };

  constructor(
    private orderService: OrderService,
    private dishService: DishService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadOrders();
    this.loadDishes();
  }

  loadOrders(): void {
    this.orderService.getOrdersByCook('cook1').subscribe(orders => {
      this.orders = orders.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    });
  }

  loadDishes(): void {
    this.dishService.getDishByCookId('cook1').subscribe(dishes => {
      this.dishes = dishes;
    });
  }

  acceptOrder(orderId: string): void {
    this.orderService.updateOrderStatus(orderId, 'confirmed').subscribe(() => {
      this.loadOrders();
    });
  }

  markReady(orderId: string): void {
    this.orderService.updateOrderStatus(orderId, 'ready').subscribe(() => {
      this.loadOrders();
    });
  }
}
