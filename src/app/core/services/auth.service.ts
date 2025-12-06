import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    // Simuler un utilisateur connecté
    /*const mockUser: User = {
      id: '1',
      email: 'jean.dupont@example.com',
      firstName: 'Jean',
      lastName: 'Dupont',
      role: 'client',
      createdAt: new Date()
    };*/
    this.currentUserSubject.next(null);
  }

  login(email: string, password: string): Observable<User> {
    // Mock login
    const user: User = {
      id: '1',
      email,
      firstName: 'Jean',
      lastName: 'Dupont',
      role: 'client',
      createdAt: new Date()
    };
    this.currentUserSubject.next(user);
    return of(user);
  }

  loginAsCook(email: string, password: string): Observable<User> {
    const cook: User = {
      id: 'cook1',
      email,
      firstName: 'Marie',
      lastName: 'Chef',
      role: 'cook',
      createdAt: new Date()
    };
    this.currentUserSubject.next(cook);
    return of(cook);
  }

  register(userData: Partial<User>): Observable<User> {
    const user: User = {
      id: Date.now().toString(),
      ...userData,
      createdAt: new Date()
    } as User;
    this.currentUserSubject.next(user);
    return of(user);
  }

  logout(): void {
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }

  isCook(): boolean {
    return this.currentUserSubject.value?.role === 'cook';
  }
}
