export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: 'client' | 'cook';
  avatar?: string;
  createdAt: Date;
}

export interface Cook extends User {
  role: 'cook';
  bio?: string;
  specialties: string[];
  rating: number;
  totalOrders: number;
}