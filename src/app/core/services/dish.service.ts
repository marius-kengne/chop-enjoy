import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Dish } from '../models/dish.model';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  private dishesSubject = new BehaviorSubject<Dish[]>(this.getMockDishes());
  public dishes$ = this.dishesSubject.asObservable();

  constructor() {}

  getDishes(filters?: any): Observable<Dish[]> {
    let dishes = this.dishesSubject.value;
    
    if (filters?.cuisine) {
      dishes = dishes.filter(d => d.cuisine === filters.cuisine);
    }
    
    if (filters?.search) {
      dishes = dishes.filter(d => 
        d.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    
    return of(dishes);
  }

  getDishById(id: string): Observable<Dish | undefined> {
    const dish = this.dishesSubject.value.find(d => d.id === id);
    return of(dish);
  }

  getDishByCookId(cookId: string): Observable<Dish[]> {
    const dishes = this.dishesSubject.value.filter(d => d.cookId === cookId);
    return of(dishes);
  }

  addDish(dish: Partial<Dish>): Observable<Dish> {
    const newDish: Dish = {
      id: Date.now().toString(),
      ...dish,
      rating: 0,
      reviewCount: 0,
      available: true
    } as Dish;
    
    const dishes = [...this.dishesSubject.value, newDish];
    this.dishesSubject.next(dishes);
    return of(newDish);
  }

  updateDish(id: string, updates: Partial<Dish>): Observable<Dish> {
    const dishes = this.dishesSubject.value.map(d => 
      d.id === id ? { ...d, ...updates } : d
    );
    this.dishesSubject.next(dishes);
    return of(dishes.find(d => d.id === id)!);
  }

  deleteDish(id: string): Observable<boolean> {
    const dishes = this.dishesSubject.value.filter(d => d.id !== id);
    this.dishesSubject.next(dishes);
    return of(true);
  }

  private getMockDishes(): Dish[] {
    return [
      {
        id: '1',
        name: 'Poulet DG',
        description: 'Poulet braisé avec légumes frais, plantain doré et sauce tomate épicée',
        price: 15,
        imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600',
        cuisine: 'Cameroun',
        cookId: 'cook1',
        cookName: 'Chef Marie',
        rating: 4.8,
        reviewCount: 45,
        available: true,
        pickupPoints: ['point1'],
        availableDates: [new Date(), new Date(Date.now() + 86400000)]
      },
      {
        id: '2',
        name: 'Thieboudienne',
        description: 'Riz au poisson, légumes variés et sauce tomate traditionnelle',
        price: 12,
        imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600',
        cuisine: 'Sénégal',
        cookId: 'cook2',
        cookName: 'Chef Fatou',
        rating: 5.0,
        reviewCount: 78,
        available: true,
        pickupPoints: ['point2'],
        availableDates: [new Date()]
      },
      {
        id: '3',
        name: 'Attiéké Poisson',
        description: 'Semoule de manioc avec poisson braisé et sauce oignon',
        price: 14,
        imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600',
        cuisine: 'Côte d\'Ivoire',
        cookId: 'cook3',
        cookName: 'Chef Aya',
        rating: 4.9,
        reviewCount: 32,
        available: true,
        pickupPoints: ['point3'],
        availableDates: [new Date(Date.now() + 86400000)]
      },
      {
        id: '4',
        name: 'Ndolé',
        description: 'Feuilles d\'amarante, crevettes, viande et cacahuètes',
        price: 13,
        imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600',
        cuisine: 'Cameroun',
        cookId: 'cook1',
        cookName: 'Chef Marie',
        rating: 4.7,
        reviewCount: 89,
        available: true,
        pickupPoints: ['point1'],
        availableDates: [new Date()]
      }
    ];
  }
}
