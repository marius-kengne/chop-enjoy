import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersSubject = new BehaviorSubject<Order[]>(this.getMockOrders());
  public orders$ = this.ordersSubject.asObservable();

  constructor() {}

  createOrder(orderData: Partial<Order>): Observable<Order> {
    const newOrder: Order = {
      id: Date.now().toString(),
      ...orderData,
      status: 'pending',
      paymentStatus: 'deposit_paid',
      createdAt: new Date()
    } as Order;
    
    const orders = [...this.ordersSubject.value, newOrder];
    this.ordersSubject.next(orders);
    return of(newOrder);
  }

  getOrdersByClient(clientId: string): Observable<Order[]> {
    const orders = this.ordersSubject.value.filter(o => o.clientId === clientId);
    return of(orders);
  }

  getOrdersByCook(cookId: string): Observable<Order[]> {
    const orders = this.ordersSubject.value.filter(o => o.cookId === cookId);
    return of(orders);
  }

  updateOrderStatus(orderId: string, status: Order['status']): Observable<Order> {
    const orders = this.ordersSubject.value.map(o => 
      o.id === orderId ? { ...o, status } : o
    );
    this.ordersSubject.next(orders);
    return of(orders.find(o => o.id === orderId)!);
  }

  private getMockOrders(): Order[] {
    return [
      {
        id: '1247',
        dishId: '1',
        dishName: 'Poulet DG',
        dishImage: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400',
        quantity: 2,
        totalPrice: 30,
        deposit: 15,
        clientId: '1',
        clientName: 'Jean Dupont',
        cookId: 'cook1',
        pickupPointId: 'point1',
        pickupTime: new Date(Date.now() + 86400000),
        status: 'pending',
        createdAt: new Date(),
        paymentStatus: 'deposit_paid'
      }
    ];
  }
}
