export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  cuisine: string;
  cookId: string;
  cookName: string;
  cookAvatar?: string;
  rating: number;
  reviewCount: number;
  available: boolean;
  pickupPoints: string[];
  availableDates: Date[];
  category?: string;
}