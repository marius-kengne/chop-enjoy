import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PickupPoint, TimeSlot } from '../models/pickup-point.model';

@Injectable({
  providedIn: 'root'
})
export class PickupService {
  private mockPickupPoints: PickupPoint[] = [
    {
      id: 'point1',
      name: 'Metro Château Rouge',
      address: '12 Rue des Poissonniers',
      city: 'Paris',
      zipCode: '75018',
      cookId: 'cook1',
      timeSlots: []
    },
    {
      id: 'point2',
      name: 'Metro Olympiades',
      address: '45 Avenue d\'Ivry',
      city: 'Paris',
      zipCode: '75013',
      cookId: 'cook2',
      timeSlots: []
    }
  ];

  getPickupPointsByCook(cookId: string): Observable<PickupPoint[]> {
    const points = this.mockPickupPoints.filter(p => p.cookId === cookId);
    return of(points);
  }

  getPickupPointById(id: string): Observable<PickupPoint | undefined> {
    const point = this.mockPickupPoints.find(p => p.id === id);
    return of(point);
  }

  getAvailableTimeSlots(pickupPointId: string, date: Date): Observable<TimeSlot[]> {
    const slots: TimeSlot[] = [
      { id: '1', date, startTime: '18:00', endTime: '18:30', available: true },
      { id: '2', date, startTime: '18:30', endTime: '19:00', available: true },
      { id: '3', date, startTime: '19:00', endTime: '19:30', available: false },
      { id: '4', date, startTime: '19:30', endTime: '20:00', available: true }
    ];
    return of(slots);
  }
}
